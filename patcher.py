'''
SuperPower Google free premium - Patcher

Made by Eletrix.fr

all credits to Aywen
'''
import os
import zipfile
import shutil
if os.name == 'nt':
    os.system('cls')
else:
    os.system('clear')

print("""
   ___                   ___                       ___                _            ___      _      _            
 / __|_  _ _ __  ___ _ _| _ \_____ __ _____ _ _   / __|___  ___  __ _| |___   ___  | _ \__ _| |_ __| |_  ___ _ _ 
 \__ \ || | '_ \/ -_) '_|  _/ _ \ V  V / -_) '_| | (_ / _ \/ _ \/ _` | / -_) |___| |  _/ _` |  _/ _| ' \/ -_) '_|
 |___/\_,_| .__/\___|_| |_| \___/\_/\_/\___|_|    \___\___/\___/\__, |_\___|       |_| \__,_|\__\__|_||_\___|_|  """)
print("")
print('''
Please provide a .zip of the crx
Website to use :
      
      - https://crxextractor.com/ (to download the crx)
      - https://www.ezyzip.com/convert-crx-to-zip.html (to convert crx to zip)

       The case the extension URL : https://chromewebstore.google.com/detail/superpower-google/dknfgdeknchipilffmnpinhocfegkmmh

*I'm not affiliated with any of these websites*
      ''''')

ZIP_FILE = input("Enter the path of the zip file (ex : dknfgdeknchipilffmnpinhocfegkmmh.zip): ")
if not os.path.exists(ZIP_FILE):
    print("File not found, please relaunch")
    exit(1)
print("[+] Extracting")
with zipfile.ZipFile(ZIP_FILE, 'r') as zip_ref:
    zip_ref.extractall("extract_")
print("[+] Patching")

shutil.copyfile("_f/0.01812561.js", "extract_/app/immutable/nodes/0.01812561.js")
shutil.copyfile("_f/1.06b28cfc.js", "extract_/app/immutable/nodes/1.06b28cfc.js")

shutil.copyfile("_f/2.23a69c31.js", "extract_/app/immutable/nodes/2.23a69c31.js")
shutil.copyfile("_f/3.d0b8c061.js", "extract_/app/immutable/nodes/3.d0b8c061.js")

shutil.copyfile("_f/images/logo.png","extract_/img/logo.png")
shutil.copyfile("_f/images/logo-xs.png","extract_/img/logo-xs.png")

print("[+] Patching done")
print("[+] Zipping")
shutil.make_archive("SuperPower-Cracked", 'zip', "extract_")
print("[+] Zipping done")
print("[+] Cleaning")
shutil.rmtree("extract_")
print("Now you can install the SuperPower-Cracked.zip with chrome://extensions and enable developer mode and drop the zip.")