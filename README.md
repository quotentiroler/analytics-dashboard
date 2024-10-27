# Analytics Dashboard

This project is an analytics dashboard that uses FastAPI for the backend, Elasticsearch for data storage and search, Kibana for data visualization, and a frontend built with React using JavaScript. The project is containerized using Docker and orchestrated with Docker Compose.

## Prerequisites

- Docker
- Docker Compose

## Services

- **Elasticsearch**: Stores and indexes data.
- **Kibana**: Visualizes data stored in Elasticsearch.
- **Backend**: FastAPI application for handling file uploads and search queries.
- **Frontend**: User interface for interacting with the backend.
- **App Search**: Enterprise search service.
- **Nginx**: Reverse proxy for routing requests to the appropriate services.

## Getting Started

### Build and Run the Containers

```sh
docker-compose up --build
```

This command will build and start all the services defined in the 

docker-compose.yml

 file.


## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
