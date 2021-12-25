# Project-ePizza
Important note: Backend is not hosted!!
Take a look 👀👀

## Run the whole project on your own pc with Docker!
docker-compose.yml:

services:
  mariadb:
    image: mariadb:10.5.12
    ports:
      - 3307:3306
    env_file:
      - .env
    volumes:
      - database-pizza:/var/lib/mysql

  adminer:
    image: adminer:4.8.1
    ports:
      - 9999:8080
    depends_on:
      - mariadb

  api:
    build: .
    ports:
      - 3001:3001
    env_file:
      - docker.ormconfig.env
    depends_on:
      - mariadb
   vue:
     image: glenntroncquo/project-frontend:2.0.1
     ports:
       - 8080:8080
  

volumes:
  database-pizza:
