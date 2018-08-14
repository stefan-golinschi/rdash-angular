#!/bin/sh

OUTFILE_PATH="/tmp/wtfismyip.com.json"

wget -q wtfismyip.com/json -O ${OUTFILE_PATH}
cat ${OUTFILE_PATH}
rm -rf ${OUTFILE_PATH}
