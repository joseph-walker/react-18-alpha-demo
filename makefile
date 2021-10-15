clean-client:
	cd public && ls | xargs rm

clean-server:
	rm server.js

build-client: clean-client
	npm run esbuild -- ./client/index.jsx --bundle --splitting --outdir=./public --format=esm

build-server: clean-server
	npm run esbuild -- ./server/index.jsx --bundle --platform=node --target=node16 --outfile=./server.js

build: build-client build-server

run: build
	node ./server.js
