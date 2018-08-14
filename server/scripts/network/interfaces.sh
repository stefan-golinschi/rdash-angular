#!/bin/sh

INTERFACES=`ip -o link show | awk -F': ' '{print $2}'`
INTERFACES=(${INTERFACES})
TMPFILE="tmp.json"

echo "[" >> $TMPFILE

for IFACE in "${INTERFACES[@]}"; do

    # ignore loopback interface
    if [ "${IFACE}" == "lo" ]; then
         continue
    fi

    STATE=`ip link show ${IFACE} | tr '\n' ' ' | grep -o "state.*" |  awk '{print $2}'`
    MTU=`ip link show ${IFACE} | tr '\n' ' ' | awk '{print $5}'`
    MAC=`ip link show ${IFACE} | grep link | awk '{print $2}'`
    IP4=`ip addr show ${IFACE} | grep "inet .*" | awk '{print $2}'`

    JSON_line=`jq -n \
		--arg iface "${IFACE}" \
		--arg state "${STATE}" \
		--arg mtu "${MTU}" \
		--arg mac "${MAC}" \
		--arg ip4 "${IP4}" \
		'{iface: $iface, state: $state, mtu: $mtu, mac_address: $mac, ip4:$ip4}' \
		`
	echo "${JSON_line}," >> $TMPFILE
done

# remove last line
sed -i '$ d' $TMPFILE
echo "}]" >> $TMPFILE

cat $TMPFILE && rm -f $TMPFILE
