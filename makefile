sourcejs=$(shell find src -name "*.js")

node_modules: package-lock.json
	npm install
	touch node_modules
public: public/index.js
	touch public

public/index.js: $(sourcejs) node_modules rollup.config.js
	node_modules/.bin/rollup -c