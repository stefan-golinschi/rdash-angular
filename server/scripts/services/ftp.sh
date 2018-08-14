#!/bin/sh

systemctl status ftp | grep Active | awk '{printf $2 " " $3}'
