# backend/Dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY app .

EXPOSE 3000

CMD ["uvicorn", "routes:app", "--host", "0.0.0.0", "--port", "3000"]