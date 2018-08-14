#!/bin/sh

TMPFILE="tmp.json"

echo "[" >> $TMPFILE

lsusb | while read -r line; do
	BUS=`echo $line | awk '{print $2}'`
	DEV=`echo $line | awk '{print $4}'`
	VID_PID=`echo $line | awk '{ print $6}'`
	DESC=`echo $line | awk '{for(i=7;i<=NF;++i) printf $i" "}' `

	JSON_line=`jq -n \
		--arg bus "$BUS" \
		--arg dev "$DEV" \
		--arg vid_pid "$VID_PID" \
		--arg desc "$DESC" \
		'{bus: $bus, device: $dev, vid_pid: $vid_pid, desc: $desc}'
		`
	echo "${JSON_line}," >> $TMPFILE
done

# remove last line
sed -i '$ d' $TMPFILE
echo "}]" >> $TMPFILE

cat $TMPFILE && rm -f $TMPFILE
