개발 도구 Eclipse (java) Oracle (database)
<br>
********* 데이터 베이스 *********<br>
<br>
CREATE SEQUENCE SEQ_NUM START WITH 1 INCREMENT BY 1;<br>
<br>
CREATE TABLE STOCK_OTABLE(<br>
  SEQ_NUM NUMBER(4) PRIMARY KEY,<br>
  시총순위 NUMBER(4),<br>
  종목코드 VARCHAR2(20),<br>
  종목명   VARCHAR2(50),<br>
  현재가   NUMBER(8),<br>
  전일비   VARCHAR2(20),<br>
  등락률   VARCHAR2(20),<br>
  거래량   NUMBER(10)<br>
);<br>
<br>
CREATE TABLE STOCK_TABLE(<br>
  시총순위 NUMBER(4), <br>
  종목코드 VARCHAR2(20),<br>
  종목명   VARCHAR2(50),<br>
  현재가   NUMBER(8),<br>
  전일비   VARCHAR2(20),<br>
  등락률   VARCHAR2(20),<br>
  거래량   NUMBER(10)<br>
);<br>
<br>
CREATE TABLE STOCK_ITABLE(<br>
  시총순위 NUMBER(4),<br>
  종목코드 VARCHAR2(20),<br>
  종목명   VARCHAR2(50),<br>
  현재가   NUMBER(8),<br>
  전일비   VARCHAR2(20),<br>
  등락률   VARCHAR2(20),<br>
  거래량   NUMBER(10)<br>
);<br>
<br>
CREATE TABLE STOCK_MTABLE(<br>
  종목코드 VARCHAR2(20),<br>
  종목명   VARCHAR2(50),<br>
  매입가   NUMBER(8),<br>
  평가손익 VARCHAR2(20),<br>
  수익률   VARCHAR2(20),<br>
  보유수량 NUMBER(8),<br>
  현재가   NUMBER(8),<br>
  전일비   VARCHAR2(20),<br>
  등락률   VARCHAR2(20),<br>
  매입금액 NUMBER(8),<br>
  평가금액 NUMBER(8)<br>
);<br>
