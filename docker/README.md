## Docker Configuration
This project is based on Docker/Docker-Compose for local development and Docker Cloud for remote deployment. Ask DevOps if you need assistance here.

### Entry points
Scripts `docker/run` and `docker/test` are meant to be called directly during  local development from the root directory.

### Directory `definitions`
Contains Dockerfiles and accessory file for Docker images that are not built by us at CT
* `mongo` and `redis` are used during local development. Databases for server environments are usually not on Docker.
