#!/bin/sh

MEM=`free -m | grep Mem | awk '{ print $4 }'`
echo  "${MEM}M"
