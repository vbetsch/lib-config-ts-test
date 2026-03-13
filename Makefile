# Variables
ref_lib := github:vbetsch/lib-config-ts
dev_branch := 28-optimize-configuration

# Commands
remove_npm_files:
	rm -rf ./package-lock.json ./node_modules/

update-lib-dev:
	npm install "$(ref_lib)#$(dev_branch)"

update-lib-prod:
	npm install $(ref_lib)

update-tsconfig-build:
	rm -rf ./dist/
	npm run tsconfig:build

.PHONY: remove_npm_files update-lib-dev update-lib-prod update-tsconfig-build

# Aliases
updlibdev: update-lib-dev
upddeps: remove_npm_files update-lib-dev

.PHONY: updlibdev upddeps
