cd backend
CALL npm i
CALL npm run build
cd ..

cd frontend
CALL npm i
CALL npm run build
cd ..

CALL docker build -t pawsubbe/store-webserver .