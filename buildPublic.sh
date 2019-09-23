# !/usr/bin/env sh
set -e

(
  cd $(dirname $0)
  make public
) > /dev/null

jq -n "{ baseDir: \"public\" }"
