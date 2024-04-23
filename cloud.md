







# Migrating to CLOUD > DevOPS
  
  > AWS, GCP, Azure, ...






                             instance EC2 (AMI 2023 OS) / node-e-shop
                             /
  +-------------------------+-+
  |                           |
  |                           |
  |                           |
  |                           |
  |                           |
  |                           <--------------------- internet --------------------->
  |                           |
  |                           |
  |                           |
  |                           |
  |                           <------- SSH ----- login --- ec2-user@
  +---------------------------+






+1. istall nodejs

sudo yum install https://rpm.nodesource.com/pub_18.x/nodistro/repo/nodesource-release-nodistro-1.noarch.rpm -y
sudo yum install nodejs -y --setopt=nodesource-nodejs.module_hotfixes=1

+2.  install postgresql server
sudo dnf update
sudo dnf install postgresql15.x86_64 postgresql15-server -y

+3. install git 
sudo dnf install git -y

+4. export database -> .sql

+5. configure postrgresql user/password
    > postgresql.conf
    > pg_hba.conf

6. import database <- .sql

7. push local repo -> remote

8. clone <-- repo

9. run app







DEVELOPMENT MACHINE
------------------------
local repository --- remote -----> github
                                     |
                                     |
                                     |
<----- clone ------------------------+
------------------------
AWS MACHINE

