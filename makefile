sourcejs=$(shell find src -name "*.js")

node_modules: package-lock.json
	npm install
	touch node_modules
public: node_modules $(sourcejs)
	node_modules/.bin/rollup -c
	touch public