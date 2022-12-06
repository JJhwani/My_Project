개발 도구 Eclipse (java) Oracle (database)<br>
<br>
********* 데이터 베이스 *********<br>
<br>
create table MUSINSA (<br>
  SEQ_NUM NUMBER (4) NOT NULL PRIMARY KEY,<br>
  PRODUCT   VARCHAR2(200),<br>
  PRODUCT_  NUM VARCHAR2(10),<br>
  BRAND     VARCHAR2(50),<br>
  CATEGORY  VARCHAR2(50),<br>
  PRICE     NUMBER(7),<br>
  STOCK     NUMBER(4)<br>
  ); // 데이터베이스 테이블<br>
<br>
create SEQUENCE seq_num start with 1 increment by 1; // 시퀀스 넘버<br>
