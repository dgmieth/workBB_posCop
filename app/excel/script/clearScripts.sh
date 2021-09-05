#!/bin/bash

systemDate=$(date +%s)

#arquivos com mais de 30 dias
fileArray=()

echo "script execution on $(date +'%x %X')" >> /usr/local/appNode/painelPosCop/app/excel/logDeletion.txt

readarray fileArray <<< "$(find /usr/local/appNode/painelPosCop/app/excel/fileCreation/*.xlsx -ctime +30)"

#teste, arquivos com menos de 1 dia
#readarray file1Array <<< "$(find /usr/local/appNode/painelPosCop/app/excel/fileCreation/*.xlsx -ctime -1)"

#echo $file1Array
echo $fileArray[@]

for i in "${fileArray[@]}"
do
      if [ ! -z "$i" ]; then
      #  fileCreationDate=$(date +%s -r $i)
      #  difference=$[$systemDate - $fileCreationDate]
      #  if [ $difference -le 2592000 ];then
                rm -f $i
                echo "  file: ""$i"" deleted in $(date +'%x %X')" >> /usr/local/appNode/painelPosCop/app/excel/logDeletion.txt
      #  fi
     fi
done

