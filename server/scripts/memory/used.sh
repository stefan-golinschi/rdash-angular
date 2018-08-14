#!/bin/sh

MEM=`free -m | grep Mem | awk '{ print $3 }'`
echo  "${MEM}M"
