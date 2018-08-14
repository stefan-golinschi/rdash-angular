#!/bin/sh

MEM=`free -m | grep Mem | awk '{ print $7 }'`
echo  "${MEM}M"
