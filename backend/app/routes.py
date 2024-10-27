from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from elasticsearch import Elasticsearch
import ndjson
import os
import logging

logging.basicConfig(level=logging.INFO)

app = FastAPI()
es = Elasticsearch(['http://elasticsearch:9200'])

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    if not file:
        raise HTTPException(status_code=400, detail="No file part")
    if file.filename == '':
        raise HTTPException(status_code=400, detail="No selected file")
    
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    with open(file_path, 'wb') as f:
        content = await file.read()
        f.write(content)
    
    bulk_ops = []
    with open(file_path, 'r') as f:
        reader = ndjson.reader(f)
        for obj in reader:
            bulk_ops.append({'index': {'_index': 'documents'}})
            bulk_ops.append(obj)
    
    try:
        response = es.bulk(body=bulk_ops)
        logging.info(f"Elasticsearch response: {response}")
        if response['errors']:
            raise HTTPException(status_code=500, detail="Error indexing documents")
        return {"detail": "File uploaded and processed"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/search")
async def search(q: str):
    if not q:
       q = '*'
    try:
        logging.info(f"Querying Elasticsearch with: {q}")
        response = es.search(index='documents', q=q)
        logging.info(f"Elasticsearch response: {response}")
        hits = response['hits']['hits']
        if not hits:
            return JSONResponse(content=[])
        return JSONResponse(content=hits)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=3000)