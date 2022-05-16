import './style.css';

//=====================================================================================

let originalHTML = `
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
  <html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <title></title>
    <meta name="generator" content="LibreOffice 6.0.7.3 (Linux)"/>
    <meta name="created" content="2022-05-13T23:51:35.214741638"/>
    <meta name="changed" content="2022-05-14T01:05:22.977034324"/>
    <style type="text/css">
      @page { margin-left: 1.5cm; margin-right: 1.5cm; margin-top: 1.5cm; margin-bottom: 0.8cm }
      p { margin-bottom: 0.25cm; line-height: 115% }
      td p { margin-bottom: 0cm }
    </style>
  </head>
  <body lang="pt-BR" dir="ltr">
  <p align="center" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="center" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="center" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="center" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="center" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="center" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="center" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="center" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="3" style="font-size: 12pt"><b>REGULAMENTO/PLANO DE OPERAÇÃO DA PROMOÇÃO</b></font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="center" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="3" style="font-size: 12pt"><b>Teste Mathias – Concurso</b></font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">1 - EMPRESAS PROMOTORAS:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">1.1 - Empresa Mandatária:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Razão Social: ROBERTO EMPRESA BI</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Endereço: JUSCELINO KUBITSCHEK DE OLIVEIRA Número: 120 Bairro: JARDIM EULALIA Município: TAUBATE</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">UF: SP CEP:12010-600</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">CNPJ/MF no: 90.009.239/0001-15</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">1.2 - Aderentes:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Razão Social:EMPRESA TOP BRASILEndereço: VINTE E UM DE ABRIL Número: 34 Bairro: BRÁS Município:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">SAO PAULO UF: SP CEP:03047-000</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">CNPJ/MF no:90.023.337/0001-07 Razão Social:RICARDO DE ALMEIDA LUPKE 90788460030Endereço:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">SINFRONIO BROCHADO Número: 3456 Complemento: LOJA 03 Bairro: BARREIRO Município: BELO</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">HORIZONTE UF: MG CEP:30640-000</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">CNPJ/MF no:90.023.340/0001-20</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">2 - MODALIDADE DA PROMOÇÃO:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Concurso</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">3 - ÁREA DE ABRANGÊNCIA:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Arroio Grande/RS Arroio do Meio/RS Arroio do Padre/RS Arroio do Sal/RS Arroio do Tigre/RS Arroio dos Ratos/RS</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Arroio Trinta/SC</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">4 - PERÍODO DA PROMOÇÃO:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">a 19/03/2022</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">5 - PERÍODO DE PARTICIPAÇÃO:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">16/03/2022 a 18/03/2022</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">6 - CRITÉRIO DE PARTICIPAÇÃO:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi pi ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi po ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi po i</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">7 - PERGUNTA DA PROMOÇÃO:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi pi ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi po ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi po i?</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">8 - APURAÇÃO E DESCRIÇÃO DE PRÊMIOS:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">PERÍODO DA APURAÇÃO: 17/03/2022 00:00 a 17/03/2022 00:00</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">PERÍODO DE PARTICIPAÇÃO DA APURAÇÃO: 16/03/2022 00:00 a 16/03/2022 23:58</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">ENDEREÇO DA APURAÇÃO: poi poi poi poi poi poi poi po ipoi poi pop pippoipoi poi p NÚMERO: 454654</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">COMPLEMENTO: poi poi poi poi poi poi poi poi poi poi poi poi po BAIRRO: poi po oipoi poipoipo po poi po poi poipoi pi poi</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">MUNICÍPIO: Arroio dos Ratos UF: RS CEP: 46546-546</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">LOCAL DA APURAÇÃO: poipoipoipopoipo op poi po po ipo ipoi</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">PRÊMIOS</font></font></p>
  <table width="100%" cellpadding="4" cellspacing="0">
    <col width="35*">
    <col width="127*">
    <col width="29*">
    <col width="42*">
    <col width="23*">
    <tr valign="top">
      <td width="14%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Quantidade</font></font></p>
      </td>
      <td width="50%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Descrição</font></font></p>
      </td>
      <td width="11%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Valor R$</font></font></p>
      </td>
      <td width="16%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Valor Total R$</font></font></p>
      </td>
      <td width="9%" style="border: 1px solid #000000; padding: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Ordem</font></font></p>
      </td>
    </tr>
    <tr valign="top">
      <td width="14%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">2</font></font></p>
      </td>
      <td width="50%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="justify"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi poi poi poi poi po ipoi poi pop pippoipoi poi p</font></font></p>
      </td>
      <td width="11%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">15.000,00</font></font></p>
      </td>
      <td width="16%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">30.000,00</font></font></p>
      </td>
      <td width="9%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">1</font></font></p>
      </td>
    </tr>
    <tr valign="top">
      <td width="14%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">3</font></font></p>
      </td>
      <td width="50%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="justify"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi poi poi poi poi po ipoi poi pop pippoipoi poi ppoi poipoi poi poi poi poi</font></font></p>
      </td>
      <td width="11%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">20.000,00</font></font></p>
      </td>
      <td width="16%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">60.000,00</font></font></p>
      </td>
      <td width="9%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">2</font></font></p>
      </td>
    </tr>
  </table>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">PERÍODO DA APURAÇÃO: 18/03/2022 00:00 a 18/03/2022 00:00</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">PERÍODO DE PARTICIPAÇÃO DA APURAÇÃO: 16/03/2022 00:00 a 17/03/2022 23:59</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">ENDEREÇO DA APURAÇÃO: poi poi poi poi poi poi poi po ipoi poi pop pippoipoi poi p NÚMERO: 454654</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">COMPLEMENTO: poi poi poi poi poi poi poi poi poi poi poi poi po BAIRRO: poi po oipoi poipoipo po poi po poi poipoi pi poi</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">MUNICÍPIO: Arroio dos Ratos UF: RS CEP: 46546-546</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">LOCAL DA APURAÇÃO: poipoipoipopoipo op poi po po ipo ipoi</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">PRÊMIOS</font></font></p>
  <table width="100%" cellpadding="4" cellspacing="0">
    <col width="35*">
    <col width="127*">
    <col width="29*">
    <col width="42*">
    <col width="23*">
    <tr valign="top">
      <td width="14%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Quantidade</font></font></p>
      </td>
      <td width="50%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Descrição</font></font></p>
      </td>
      <td width="11%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Valor R$</font></font></p>
      </td>
      <td width="16%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Valor Total R$</font></font></p>
      </td>
      <td width="9%" style="border: 1px solid #000000; padding: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Ordem</font></font></p>
      </td>
    </tr>
    <tr valign="top">
      <td width="14%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">2</font></font></p>
      </td>
      <td width="50%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="justify"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi poi poi poi poi po ipoi poi pop pippoipoi poi p</font></font></p>
      </td>
      <td width="11%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">15.000,00</font></font></p>
      </td>
      <td width="16%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">30.000,00</font></font></p>
      </td>
      <td width="9%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">1</font></font></p>
      </td>
    </tr>
    <tr valign="top">
      <td width="14%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">3</font></font></p>
      </td>
      <td width="50%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="justify"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi poi poi poi poi po ipoi poi pop pippoipoi poi ppoi poipoi poi poi poi poi</font></font></p>
      </td>
      <td width="11%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">20.000,00</font></font></p>
      </td>
      <td width="16%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">60.000,00</font></font></p>
      </td>
      <td width="9%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">2</font></font></p>
      </td>
    </tr>
  </table>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">PERÍODO DA APURAÇÃO: 19/03/2022 00:00 a 19/03/2022 00:00</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">PERÍODO DE PARTICIPAÇÃO DA APURAÇÃO: 16/03/2022 00:00 a 18/03/2022 23:59</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">ENDEREÇO DA APURAÇÃO: poi poi poi poi poi poi poi po ipoi poi pop pippoipoi poi p NÚMERO: 454654</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">COMPLEMENTO: poi poi poi poi poi poi poi poi poi poi poi poi po BAIRRO: poi po oipoi poipoipo po poi po poi poipoi pi poi</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">MUNICÍPIO: Arroio dos Ratos UF: RS CEP: 46546-546</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">LOCAL DA APURAÇÃO: poipoipoipopoipo op poi po po ipo ipoi</font></font></p>
  <p style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">PRÊMIOS</font></font></p>
  <table width="100%" cellpadding="4" cellspacing="0">
    <col width="35*">
    <col width="127*">
    <col width="29*">
    <col width="42*">
    <col width="23*">
    <tr valign="top">
      <td width="14%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Quantidade</font></font></p>
      </td>
      <td width="50%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Descrição</font></font></p>
      </td>
      <td width="11%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Valor R$</font></font></p>
      </td>
      <td width="16%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Valor Total R$</font></font></p>
      </td>
      <td width="9%" style="border: 1px solid #000000; padding: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Ordem</font></font></p>
      </td>
    </tr>
    <tr valign="top">
      <td width="14%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">2</font></font></p>
      </td>
      <td width="50%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="justify"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi poi poi poi poi po ipoi poi pop pippoipoi poi p</font></font></p>
      </td>
      <td width="11%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">15.000,00</font></font></p>
      </td>
      <td width="16%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">30.000,00</font></font></p>
      </td>
      <td width="9%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">1</font></font></p>
      </td>
    </tr>
    <tr valign="top">
      <td width="14%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">3</font></font></p>
      </td>
      <td width="50%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="justify"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi poi poi poi poi po ipoi poi pop pippoipoi poi ppoi po ipoi poi poi poi poi</font></font></p>
      </td>
      <td width="11%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">20.000,00</font></font></p>
      </td>
      <td width="16%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">60.000,00</font></font></p>
      </td>
      <td width="9%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">2</font></font></p>
      </td>
    </tr>
  </table>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">9 - PREMIAÇÃO TOTAL:</font></font></p>
  <table width="100%" cellpadding="4" cellspacing="0">
    <col width="128*">
    <col width="128*">
    <tr valign="top">
      <td width="50%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Quantidade Total de Prêmios</font></font></p>
      </td>
      <td width="50%" style="border: 1px solid #000000; padding: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Valor total da Promoção R$</font></font></p>
      </td>
    </tr>
    <tr valign="top">
      <td width="50%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">15</font></font></p>
      </td>
      <td width="50%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">270.000,00</font></font></p>
      </td>
    </tr>
  </table>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">10 - FORMA DE APURAÇÃO:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi pi ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi po ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi po i</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">11 - CRITÉRIOS DE DESCLASSIFICAÇÃO:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi pi ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi po ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi po i</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">12 - FORMA DE DIVULGAÇÃO DO RESULTADO:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi pi ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi po ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi po i</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">13 - ENTREGA DOS PRÊMIOS:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi pi ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi po ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi po i</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">14 - DISPOSIÇÕES GERAIS:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi pi ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi po ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi po i</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">15 - TERMO DE RESPONSABILIDADE</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Poderá participar da promoção qualquer consumidor que preencha os requisitos estipulados no regulamento da campanha autorizada;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Os prêmios não poderão ser convertidos em dinheiro;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">É vedada a apuração por meio eletrônico;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Os prêmios serão entregues em até 30 dias da data da apuração/sorteio, sem qualquer ônus aos contemplados</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Quando o prêmio sorteado, ganho em concurso ou conferido mediante vale-brinde, não for reclamado no prazo de cento e oitenta (180) dias, contados, respectivamente, da data do sorteio, da apuração do resultado do concurso ou do término do prazo da promoção, caducará o direito do respectivo titular e o valor correspondente será recolhido, pela empresa autorizada, ao Tesouro Nacional, como renda da União, no prazo de quarenta e cinco (45) dias;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Em caso de promoções com participação de menor de idade, sendo este contemplado, deverá, no ato da entrega do prêmio, ser representado por seu responsável legal;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">A divulgação da imagem dos contemplados poderá ser feita até um ano após a apuração da promoção comercial;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">As dúvidas e controvérsias oriundas de reclamações dos participantes serão, primeiramente, dirimidas pela promotora, persistindo-as, estas deverão ser submetidas à Secap/ME;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Os órgãos locais de defesa do consumidor receberão as reclamações devidamente fundamentadas;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">A prestação de contas deverá ser realizada no prazo máximo de trinta dias após a data de prescrição dos prêmios sob pena de descumprimento do plano de distribuição de prêmios;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">O regulamento deverá ser afixado em lugar de ampla visibilidade e se apresentar em tamanho e em grafia que viabilizem a compreensão e visualização por parte do consumidor participante da promoção comercial;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Além dos termos acima, a promoção comercial deverá obedecer às condições previstas na Lei no 5.768, de 1971, no Decreto no 70.951, de 1972, Portaria MF no 41, de 2008, Portaria MF no 67, de 2017, Portaria MF no 422 de 2013, Portaria Seae/MF no 88 de 2000, e em atos que as complementarem.</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">A infringência às cláusulas do Termo de Responsabilidade e do Regulamento constituem descumprimento do plano de operação e ensejam as penalidade previstas no artigo 13 da Lei no. 5.768, de 1971.</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <div title="footer">
    <p align="right" style="margin-top: 0.5cm; margin-bottom: 0cm; line-height: 100%">
    <font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Página 	<sdfield type=PAGE subtype=RANDOM format=PAGE>3</sdfield> de <sdfield type=DOCSTAT subtype=PAGE format=PAGE>3</sdfield></font></font></p>
  </div>
  </body>
  </html>`;


//=====================================================================================


let newHTML = `
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
  <html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <title></title>
    <meta name="generator" content="LibreOffice 6.0.7.3 (Linux)"/>
    <meta name="created" content="2022-05-13T23:51:35.214741638"/>
    <meta name="changed" content="2022-05-14T01:06:37.103039865"/>
    <style type="text/css">
      @page { margin-left: 1.5cm; margin-right: 1.5cm; margin-top: 1.5cm; margin-bottom: 0.8cm }
      p { margin-bottom: 0.25cm; line-height: 115% }
      td p { margin-bottom: 0cm }
    </style>
  </head>
  <body lang="pt-BR" dir="ltr">
  <p align="center" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="center" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="center" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="center" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="center" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="center" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="center" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="center" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="3" style="font-size: 12pt"><b>REGULAMENTO/PLANO DE OPERAÇÃO DA PROMOÇÃO</b></font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="center" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="3" style="font-size: 12pt"><b>Teste Mathias Schmeling – Concurso</b></font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">1 - EMPRESAS PROMOTORAS:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">1.1 - Empresa Mandatária:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Razão Social: ROBERTO EMPRESA BI</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Endereço: JUSCELINO KUBITSCHEK DE OLIVEIRA Número: 120 Bairro: JARDIM EULALIA Município: TAUBATE</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">UF: SP CEP:12010-600</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">CNPJ/MF no: 90.009.239/0001-15</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">1.2 - Aderentes:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Razão Social:EMPRESA TOP BRASILEndereço: VINTE E UM DE ABRIL Número: 34 Bairro: BRÁS Município:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">SAO PAULO UF: SP CEP:03047-000</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">CNPJ/MF no:90.023.337/0001-07 Razão Social:RICARDO DE ALMEIDA LUPKE 90788460030Endereço:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">SINFRONIO BROCHADO Número: 3456 Complemento: LOJA 03 Bairro: BARREIRO Município: BELO</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">HORIZONTE UF: MG CEP:30640-000</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">CNPJ/MF no:90.023.340/0001-20</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">2 - MODALIDADE DA PROMOÇÃO:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Concurso (Filantrópico)</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">3 - ÁREA DE ABRANGÊNCIA:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Anamã/AM Anori/AM Apuí/AM Atalaia do Norte/AM GO Abaetetuba/PA Acará/PA Afuá/PA Arroio Grande/RS Arroio do Meio/RS Arroio do Padre/RS Arroio do Sal/RS Arroio do Tigre/RS Arroio dos Ratos/RS Arroio Trinta/SC</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">4 - PERÍODO DA PROMOÇÃO:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">16/05/2022 a 29/05/2022</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">5 - PERÍODO DE PARTICIPAÇÃO:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">16/05/2022 a 29/05/2022</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">6 - CRITÉRIO DE PARTICIPAÇÃO:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi pi ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi po ipoi poi poi poi poi poi poi poi poi poi poi poi poi</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi poi poi poi poi poi poi poi po i</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">uiouoo uoiu oiu oiu oiu oiu oi uoiu oiuoi uoiuoi uoiuoi uoi uoi uoi uiou oi uoi uoi u oiu oi uo iu oiu oi u oiu oi u oiu oi uoiu oi uoi uo iu iu</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">lkjasl dlkj adslkj lkja dlkjs klj lksdajlkasjd lkajd lkasj dlkaj dlkaj lkaj dlkaj dlkaj dlkja ldkja dlkja sdlkja dlkja dklj alkdj aslkdj alkdj alkdj lakj dlkaj dlkaj dlkaj dlkaj dlkasj d</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">weiuy iuy eiuy qiuey iu wiuwe iuewy iuy wiuewy iuwqey iuy iuy iwuey wiuywe iuwey iuy wiuwqey wiuy equyq</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">7 - PERGUNTA DA PROMOÇÃO:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi pi uyt u y uy tuyt uyt uyuyt ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi po ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi po i?</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">8 - APURAÇÃO E DESCRIÇÃO DE PRÊMIOS:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">PERÍODO DA APURAÇÃO: 22/05/2022 00:00 a 22/05/2022 00:00</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">PERÍODO DE PARTICIPAÇÃO DA APURAÇÃO: 16/05/2022 00:00 a 21/05/2022 23:59</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">ENDEREÇO DA APURAÇÃO: poi poi poi poi poi poi poi po ipoi poi pop pippoipoi poi p NÚMERO: 455654</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">COMPLEMENTO: poi poi poi poi poi poi poi poi poi poi poi poi po BAIRRO: poi po oipoi poipoipo po poi po poi poipoi pi poi</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">MUNICÍPIO: Arroio dos Ratos UF: RS CEP: 46545-546</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">LOCAL DA APURAÇÃO: poipoipoipopoipo op poi po po ipo ipoi</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">PRÊMIOS</font></font></p>
  <table width="100%" cellpadding="4" cellspacing="0">
    <col width="35*">
    <col width="127*">
    <col width="29*">
    <col width="42*">
    <col width="23*">
    <tr valign="top">
      <td width="14%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Quantidade</font></font></p>
      </td>
      <td width="50%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Descrição</font></font></p>
      </td>
      <td width="11%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Valor R$</font></font></p>
      </td>
      <td width="16%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Valor Total R$</font></font></p>
      </td>
      <td width="9%" style="border: 1px solid #000000; padding: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Ordem</font></font></p>
      </td>
    </tr>
    <tr valign="top">
      <td width="14%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">2</font></font></p>
      </td>
      <td width="50%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="justify" style="margin-bottom: 0cm"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi poi poi poi poi po ipoi poi pop pippoipoi poi p jhas jga sdj asjh gajg dsjhgas jhdg ajdg jasgd jhasg</font></font></p>
        <p align="justify"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">jhasgdj asgd jhasg djhasg jdasg</font></font></p>
      </td>
      <td width="11%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">15.000,00</font></font></p>
      </td>
      <td width="16%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">30.000,00</font></font></p>
      </td>
      <td width="9%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">1</font></font></p>
      </td>
    </tr>
    <tr valign="top">
      <td width="14%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">3</font></font></p>
      </td>
      <td width="50%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="justify" style="margin-bottom: 0cm"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">kjashd kah kjash kjash dkjahs kjh daskjdh kjashd dkjash</font></font></p>
        <p align="justify" style="margin-bottom: 0cm"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">dkjahs kjdh</font></font></p>
        <p align="justify"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi poi poi poi poi po ipoi poi pop pippoipoi poi ppoi po ipoi poi poi poi poi</font></font></p>
      </td>
      <td width="11%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">20.000,00</font></font></p>
      </td>
      <td width="16%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">60.000,00</font></font></p>
      </td>
      <td width="9%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">2</font></font></p>
      </td>
    </tr>
  </table>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">PERÍODO DA APURAÇÃO: 125/05/2022 00:00 a 25/05/2022 00:00</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">PERÍODO DE PARTICIPAÇÃO DA APURAÇÃO: 16/05/2022 00:00 a 24/05/2022 23:59</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">ENDEREÇO DA APURAÇÃO: poi poi poi poi poi poi poi po ipoi poi pop pippoipoi poi p NÚMERO: 454654</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">COMPLEMENTO: poi poi poi poi poi poi poi poi poi poi poi poi po BAIRRO: poi po oipoi poipoipo po poi po poi poipoi pi poi</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">MUNICÍPIO: Arroio dos Ratos UF: RS CEP: 46546-546</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">LOCAL DA APURAÇÃO: poipoipoipopoipo op poi po po ipo ipoi</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">PRÊMIOS</font></font></p>
  <table width="100%" cellpadding="4" cellspacing="0">
    <col width="35*">
    <col width="127*">
    <col width="29*">
    <col width="42*">
    <col width="23*">
    <tr valign="top">
      <td width="14%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Quantidade</font></font></p>
      </td>
      <td width="50%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Descrição</font></font></p>
      </td>
      <td width="11%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Valor R$</font></font></p>
      </td>
      <td width="16%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Valor Total R$</font></font></p>
      </td>
      <td width="9%" style="border: 1px solid #000000; padding: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Ordem</font></font></p>
      </td>
    </tr>
    <tr valign="top">
      <td width="14%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">2</font></font></p>
      </td>
      <td width="50%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="justify"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi poi poi poi poi po ipoi poi pop pippoipoi poi p</font></font></p>
      </td>
      <td width="11%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">14.990,00</font></font></p>
      </td>
      <td width="16%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">29.980,00</font></font></p>
      </td>
      <td width="9%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">1</font></font></p>
      </td>
    </tr>
    <tr valign="top">
      <td width="14%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">3</font></font></p>
      </td>
      <td width="50%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="justify"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi poi poi poi poi po ipoi poi pop pippoipoi poi ppoi poipoi poi poi poi poi</font></font></p>
      </td>
      <td width="11%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">20.055,00</font></font></p>
      </td>
      <td width="16%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">60.165,00</font></font></p>
      </td>
      <td width="9%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">2</font></font></p>
      </td>
    </tr>
  </table>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">PERÍODO DA APURAÇÃO: 29/05/2022 00:00 a 29/05/2022 00:00</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">PERÍODO DE PARTICIPAÇÃO DA APURAÇÃO: 16/05/2022 00:00 a 22/05/2022 23:59</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">ENDEREÇO DA APURAÇÃO: poi poi poi poi poi poi poi po ipoi poi pop pippoipoi poi p NÚMERO: 454654</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">COMPLEMENTO: poi poi poi poi poi poi poi poi poi poi poi poi po BAIRRO: poi po oipoi poipoipo po poi po poi poipoi pi poi</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">MUNICÍPIO: Arroio dos Ratos UF: RS CEP: 46546-546</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">LOCAL DA APURAÇÃO: poipoipoipopoipo op poi po po ipo ipoi</font></font></p>
  <p style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">PRÊMIOS</font></font></p>
  <table width="100%" cellpadding="4" cellspacing="0">
    <col width="35*">
    <col width="127*">
    <col width="29*">
    <col width="42*">
    <col width="23*">
    <tr valign="top">
      <td width="14%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Quantidade</font></font></p>
      </td>
      <td width="50%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Descrição</font></font></p>
      </td>
      <td width="11%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Valor R$</font></font></p>
      </td>
      <td width="16%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Valor Total R$</font></font></p>
      </td>
      <td width="9%" style="border: 1px solid #000000; padding: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Ordem</font></font></p>
      </td>
    </tr>
    <tr valign="top">
      <td width="14%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">3</font></font></p>
      </td>
      <td width="50%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="justify"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi poi poi poi poi po ipoi poi pop pippoipoi poi p</font></font></p>
      </td>
      <td width="11%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">15.000,00</font></font></p>
      </td>
      <td width="16%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">45.000,00</font></font></p>
      </td>
      <td width="9%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">1</font></font></p>
      </td>
    </tr>
    <tr valign="top">
      <td width="14%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">4</font></font></p>
      </td>
      <td width="50%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="justify"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi poi poi poi poi po ipoi poi pop pippoipoi poi ppoi po ipoi poi poi poi poi</font></font></p>
      </td>
      <td width="11%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">20.000,00</font></font></p>
      </td>
      <td width="16%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">80.000,00</font></font></p>
      </td>
      <td width="9%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">2</font></font></p>
      </td>
    </tr>
  </table>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">9 - PREMIAÇÃO TOTAL:</font></font></p>
  <table width="100%" cellpadding="4" cellspacing="0">
    <col width="128*">
    <col width="128*">
    <tr valign="top">
      <td width="50%" style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0.1cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Quantidade Total de Prêmios</font></font></p>
      </td>
      <td width="50%" style="border: 1px solid #000000; padding: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Valor total da Promoção R$</font></font></p>
      </td>
    </tr>
    <tr valign="top">
      <td width="50%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: none; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">17</font></font></p>
      </td>
      <td width="50%" style="border-top: none; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000; padding-top: 0cm; padding-bottom: 0.1cm; padding-left: 0.1cm; padding-right: 0.1cm">
        <p align="center"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">305.145,00</font></font></p>
      </td>
    </tr>
  </table>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">10 - FORMA DE APURAÇÃO:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi pi ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi po ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi po i</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">yu uy wueqyt uyt wuywt wuqyt uy wyu wuywqte uqy kjd jha kjah kdjh asdkjh askjdh kjash kjash dsakja adjkjdah askjhas kjasdh dkjhas kjdh kjash kdasjh askjhsda kjasdh kjsdah dkasjh askjhd skjash kjdsah askjhas kjdsh asdkjh asdkjd</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">11 - CRITÉRIOS DE DESCLASSIFICAÇÃO:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">uyuy euy uy wuy quywe uyqte uywq teuyqwt euyqt euyq uytqw euytquyetq euytq euyqtweyut</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi pi ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi ppoipoipopoipo ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi po i</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">m,znx,mxzcn ,zxcmn x,mnxc ,mn ,mn c,mxnz, xxcmn mnbmnbz zmnb czmnbxz mnbzx cmnbxz cmnbzx cmnbz cmnb zmncbz mnbc mnzxbc mnzbxc mnzxbc zxmn</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">klasjdlksj dlkjas dklsaj dlkj askldj laksjd lkasj dlkaj dlkajs dlkj salkjd ladskj</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">12 - FORMA DE DIVULGAÇÃO DO RESULTADO:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">iuqy wiuywe iuwy iuqy iuy iuqy eu qwiuye qiwuye iuqwy eiuqwy eiuqwyei uyq iuey qiwuey iquwye iuqy eiuqy eiuqwy eiuqyw eiuyq ieuy qiuey qwiuye iuqwy eiu ewru ywrtuerriwuyrowreiutwiqoiqu oq o ioe oiq eiopqw u</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi pi ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi po ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi po i</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">13 - ENTREGA DOS PRÊMIOS:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi pi ipoi poi poi poi poi po iqwue iwqu eqwiu qweiuy iuyweq iuy iu weuiy wiuy qwiuey iquwye iuqwye qiwuy i poi poi poi poi poi poi poi poi po ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi po i</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">14 - DISPOSIÇÕES GERAIS:</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">poi poi poi pi ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi po ipoi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi poi po i</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">15 - TERMO DE RESPONSABILIDADE</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Poderá participar da promoção qualquer consumidor que preencha os requisitos estipulados no regulamento da campanha autorizada;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Os prêmios não poderão ser convertidos em dinheiro;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">É vedada a apuração por meio eletrônico;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Os prêmios serão entregues em até 30 dias da data da apuração/sorteio, sem qualquer ônus aos contemplados</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Quando o prêmio sorteado, ganho em concurso ou conferido mediante vale-brinde, não for reclamado no prazo de cento e oitenta (180) dias, contados, respectivamente, da data do sorteio, da apuração do resultado do concurso ou do término do prazo da promoção, caducará o direito do respectivo titular e o valor correspondente será recolhido, pela empresa autorizada, ao Tesouro Nacional, como renda da União, no prazo de quarenta e cinco (45) dias;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Em caso de promoções com participação de menor de idade, sendo este contemplado, deverá, no ato da entrega do prêmio, ser representado por seu responsável legal;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">A divulgação da imagem dos contemplados poderá ser feita até um ano após a apuração da promoção comercial;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">As dúvidas e controvérsias oriundas de reclamações dos participantes serão, primeiramente, dirimidas pela promotora, persistindo-as, estas deverão ser submetidas à Secap/ME;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Os órgãos locais de defesa do consumidor receberão as reclamações devidamente fundamentadas;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">A prestação de contas deverá ser realizada no prazo máximo de trinta dias após a data de prescrição dos prêmios sob pena de descumprimento do plano de distribuição de prêmios;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">O regulamento deverá ser afixado em lugar de ampla visibilidade e se apresentar em tamanho e em grafia que viabilizem a compreensão e visualização por parte do consumidor participante da promoção comercial;</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Além dos termos acima, a promoção comercial deverá obedecer às condições previstas na Lei no 5.768, de 1971, no Decreto no 70.951, de 1972, Portaria MF no 41, de 2008, Portaria MF no 67, de 2017, Portaria MF no 422 de 2013, Portaria Seae/MF no 88 de 2000, e em atos que as complementarem.</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">A infringência às cláusulas do Termo de Responsabilidade e do Regulamento constituem descumprimento do plano de operação e ensejam as penalidade previstas no artigo 13 da Lei no. 5.768, de 1971.</font></font></p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <p align="justify" style="margin-bottom: 0cm; line-height: 100%"><br/>

  </p>
  <div title="footer">
    <p align="right" style="margin-top: 0.5cm; margin-bottom: 0cm; line-height: 100%">
    <font face="Arial, sans-serif"><font size="2" style="font-size: 10pt">Página 	<sdfield type=PAGE subtype=RANDOM format=PAGE>3</sdfield> de <sdfield type=DOCSTAT subtype=PAGE format=PAGE>3</sdfield></font></font></p>
  </div>
  </body>
  </html>`;

//=====================================================================================


var Match,
  calculate_operations,
  consecutive_where,
  create_index,
  diff,
  find_match,
  find_matching_blocks,
  html_to_tokens,
  is_end_of_tag,
  is_start_of_tag,
  is_tag,
  is_whitespace,
  isnt_tag,
  op_map,
  recursively_find_matching_blocks,
  render_operations,
  wrap;

is_end_of_tag = function (char) {
  return char === '>';
};
is_start_of_tag = function (char) {
  return char === '<';
};
is_whitespace = function (char) {
  return /^\s+$/.test(char);
};
is_tag = function (token) {
  return /^\s*<[^>]+>\s*$/.test(token);
};
isnt_tag = function (token) {
  return !is_tag(token);
};
Match = class Match {
  constructor(start_in_before1, start_in_after1, length1) {
    this.start_in_before = start_in_before1;
    this.start_in_after = start_in_after1;
    this.length = length1;
    this.end_in_before = this.start_in_before + this.length - 1;
    this.end_in_after = this.start_in_after + this.length - 1;
  }
};
html_to_tokens = function (html) {
  var char, current_word, i, len, mode, words;
  mode = 'char';
  current_word = '';
  words = [];
  for (i = 0, len = html.length; i < len; i++) {
    char = html[i];
    switch (mode) {
      case 'tag':
        if (is_end_of_tag(char)) {
          current_word += '>';
          words.push(current_word);
          current_word = '';
          if (is_whitespace(char)) {
            mode = 'whitespace';
          } else {
            mode = 'char';
          }
        } else {
          current_word += char;
        }
        break;
      case 'char':
        if (is_start_of_tag(char)) {
          if (current_word) {
            words.push(current_word);
          }
          current_word = '<';
          mode = 'tag';
        } else if (/\s/.test(char)) {
          if (current_word) {
            words.push(current_word);
          }
          current_word = char;
          mode = 'whitespace';
        } else if (/[\w\#@]+/i.test(char)) {
          current_word += char;
        } else {
          if (current_word) {
            words.push(current_word);
          }
          current_word = char;
        }
        break;
      case 'whitespace':
        if (is_start_of_tag(char)) {
          if (current_word) {
            words.push(current_word);
          }
          current_word = '<';
          mode = 'tag';
        } else if (is_whitespace(char)) {
          current_word += char;
        } else {
          if (current_word) {
            words.push(current_word);
          }
          current_word = char;
          mode = 'char';
        }
        break;
      default:
        throw new Error(`Unknown mode ${mode}`);
    }
  }
  if (current_word) {
    words.push(current_word);
  }
  return words;
};
find_match = function (
  before_tokens,
  after_tokens,
  index_of_before_locations_in_after_tokens,
  start_in_before,
  end_in_before,
  start_in_after,
  end_in_after
) {
  var best_match_in_after,
    best_match_in_before,
    best_match_length,
    i,
    index_in_after,
    index_in_before,
    j,
    len,
    locations_in_after,
    looking_for,
    match,
    match_length_at,
    new_match_length,
    new_match_length_at,
    ref,
    ref1;
  best_match_in_before = start_in_before;
  best_match_in_after = start_in_after;
  best_match_length = 0;
  match_length_at = {};
  for (
    index_in_before = i = ref = start_in_before, ref1 = end_in_before;
    ref <= ref1 ? i < ref1 : i > ref1;
    index_in_before = ref <= ref1 ? ++i : --i
  ) {
    new_match_length_at = {};
    looking_for = before_tokens[index_in_before];
    locations_in_after = index_of_before_locations_in_after_tokens[looking_for];
    for (j = 0, len = locations_in_after.length; j < len; j++) {
      index_in_after = locations_in_after[j];
      if (index_in_after < start_in_after) {
        continue;
      }
      if (index_in_after >= end_in_after) {
        break;
      }
      if (match_length_at[index_in_after - 1] == null) {
        match_length_at[index_in_after - 1] = 0;
      }
      new_match_length = match_length_at[index_in_after - 1] + 1;
      new_match_length_at[index_in_after] = new_match_length;
      if (new_match_length > best_match_length) {
        best_match_in_before = index_in_before - new_match_length + 1;
        best_match_in_after = index_in_after - new_match_length + 1;
        best_match_length = new_match_length;
      }
    }
    match_length_at = new_match_length_at;
  }
  if (best_match_length !== 0) {
    match = new Match(
      best_match_in_before,
      best_match_in_after,
      best_match_length
    );
  }
  return match;
};
recursively_find_matching_blocks = function (
  before_tokens,
  after_tokens,
  index_of_before_locations_in_after_tokens,
  start_in_before,
  end_in_before,
  start_in_after,
  end_in_after,
  matching_blocks
) {
  var match;
  match = find_match(
    before_tokens,
    after_tokens,
    index_of_before_locations_in_after_tokens,
    start_in_before,
    end_in_before,
    start_in_after,
    end_in_after
  );
  if (match != null) {
    if (
      start_in_before < match.start_in_before &&
      start_in_after < match.start_in_after
    ) {
      recursively_find_matching_blocks(
        before_tokens,
        after_tokens,
        index_of_before_locations_in_after_tokens,
        start_in_before,
        match.start_in_before,
        start_in_after,
        match.start_in_after,
        matching_blocks
      );
    }
    matching_blocks.push(match);
    if (
      match.end_in_before <= end_in_before &&
      match.end_in_after <= end_in_after
    ) {
      recursively_find_matching_blocks(
        before_tokens,
        after_tokens,
        index_of_before_locations_in_after_tokens,
        match.end_in_before + 1,
        end_in_before,
        match.end_in_after + 1,
        end_in_after,
        matching_blocks
      );
    }
  }
  return matching_blocks;
};
create_index = function (p) {
  var i, idx, index, len, ref, token;
  if (p.find_these == null) {
    throw new Error('params must have find_these key');
  }
  if (p.in_these == null) {
    throw new Error('params must have in_these key');
  }
  index = {};
  ref = p.find_these;
  for (i = 0, len = ref.length; i < len; i++) {
    token = ref[i];
    index[token] = [];
    idx = p.in_these.indexOf(token);
    while (idx !== -1) {
      index[token].push(idx);
      idx = p.in_these.indexOf(token, idx + 1);
    }
  }
  return index;
};
find_matching_blocks = function (before_tokens, after_tokens) {
  var index_of_before_locations_in_after_tokens, matching_blocks;
  matching_blocks = [];
  index_of_before_locations_in_after_tokens = create_index({
    find_these: before_tokens,
    in_these: after_tokens,
  });
  return recursively_find_matching_blocks(
    before_tokens,
    after_tokens,
    index_of_before_locations_in_after_tokens,
    0,
    before_tokens.length,
    0,
    after_tokens.length,
    matching_blocks
  );
};
calculate_operations = function (before_tokens, after_tokens) {
  var action_map,
    action_up_to_match_positions,
    i,
    index,
    is_single_whitespace,
    j,
    last_op,
    len,
    len1,
    match,
    match_starts_at_current_position_in_after,
    match_starts_at_current_position_in_before,
    matches,
    op,
    operations,
    position_in_after,
    position_in_before,
    post_processed;
  if (before_tokens == null) {
    throw new Error('before_tokens?');
  }
  if (after_tokens == null) {
    throw new Error('after_tokens?');
  }
  position_in_before = position_in_after = 0;
  operations = [];
  action_map = {
    'false,false': 'replace',
    'true,false': 'insert',
    'false,true': 'delete',
    'true,true': 'none',
  };
  matches = find_matching_blocks(before_tokens, after_tokens);
  matches.push(new Match(before_tokens.length, after_tokens.length, 0));
  for (index = i = 0, len = matches.length; i < len; index = ++i) {
    match = matches[index];
    match_starts_at_current_position_in_before =
      position_in_before === match.start_in_before;
    match_starts_at_current_position_in_after =
      position_in_after === match.start_in_after;
    action_up_to_match_positions =
      action_map[
        [
          match_starts_at_current_position_in_before,
          match_starts_at_current_position_in_after,
        ].toString()
      ];
    if (action_up_to_match_positions !== 'none') {
      operations.push({
        action: action_up_to_match_positions,
        start_in_before: position_in_before,
        end_in_before:
          action_up_to_match_positions !== 'insert'
            ? match.start_in_before - 1
            : void 0,
        start_in_after: position_in_after,
        end_in_after:
          action_up_to_match_positions !== 'delete'
            ? match.start_in_after - 1
            : void 0,
      });
    }
    if (match.length !== 0) {
      operations.push({
        action: 'equal',
        start_in_before: match.start_in_before,
        end_in_before: match.end_in_before,
        start_in_after: match.start_in_after,
        end_in_after: match.end_in_after,
      });
    }
    position_in_before = match.end_in_before + 1;
    position_in_after = match.end_in_after + 1;
  }
  post_processed = [];
  last_op = {
    action: 'none',
  };
  is_single_whitespace = function (op) {
    if (op.action !== 'equal') {
      return false;
    }
    if (op.end_in_before - op.start_in_before !== 0) {
      return false;
    }
    return /^\s$/.test(
      before_tokens.slice(op.start_in_before, +op.end_in_before + 1 || 9e9)
    );
  };
  for (j = 0, len1 = operations.length; j < len1; j++) {
    op = operations[j];
    if (
      (is_single_whitespace(op) && last_op.action === 'replace') ||
      (op.action === 'replace' && last_op.action === 'replace')
    ) {
      last_op.end_in_before = op.end_in_before;
      last_op.end_in_after = op.end_in_after;
    } else {
      post_processed.push(op);
      last_op = op;
    }
  }
  return post_processed;
};
consecutive_where = function (start, content, predicate) {
  var answer, i, index, last_matching_index, len, token;
  content = content.slice(start, +content.length + 1 || 9e9);
  last_matching_index = void 0;
  for (index = i = 0, len = content.length; i < len; index = ++i) {
    token = content[index];
    answer = predicate(token);
    if (answer === true) {
      last_matching_index = index;
    }
    if (answer === false) {
      break;
    }
  }
  if (last_matching_index != null) {
    return content.slice(0, +last_matching_index + 1 || 9e9);
  }
  return [];
};
wrap = function (tag, content) {
  var length, non_tags, position, rendering, tags;
  rendering = '';
  position = 0;
  length = content.length;
  while (true) {
    if (position >= length) {
      break;
    }
    non_tags = consecutive_where(position, content, isnt_tag);
    position += non_tags.length;
    if (non_tags.length !== 0) {
      rendering += `<${tag}>${non_tags.join('')}</${tag}>`;
    }
    if (position >= length) {
      break;
    }
    tags = consecutive_where(position, content, is_tag);
    position += tags.length;
    rendering += tags.join('');
  }
  return rendering;
};
op_map = {
  equal: function (op, before_tokens, after_tokens) {
    return before_tokens
      .slice(op.start_in_before, +op.end_in_before + 1 || 9e9)
      .join('');
  },
  insert: function (op, before_tokens, after_tokens) {
    var val;
    val = after_tokens.slice(op.start_in_after, +op.end_in_after + 1 || 9e9);
    return wrap('ins', val);
  },
  delete: function (op, before_tokens, after_tokens) {
    var val;
    val = before_tokens.slice(op.start_in_before, +op.end_in_before + 1 || 9e9);
    return wrap('del', val);
  },
};
op_map.replace = function (op, before_tokens, after_tokens) {
  return (
    op_map.delete(op, before_tokens, after_tokens) +
    op_map.insert(op, before_tokens, after_tokens)
  );
};
render_operations = function (before_tokens, after_tokens, operations) {
  var i, len, op, rendering;
  rendering = '';
  for (i = 0, len = operations.length; i < len; i++) {
    op = operations[i];
    rendering += op_map[op.action](op, before_tokens, after_tokens);
  }
  return rendering;
};
diff = function (before, after) {
  var ops;
  if (before === after) {
    return before;
  }
  before = html_to_tokens(before);
  after = html_to_tokens(after);
  ops = calculate_operations(before, after);
  return render_operations(before, after, ops);
};

diff.html_to_tokens = html_to_tokens;
diff.find_matching_blocks = find_matching_blocks;
find_matching_blocks.find_match = find_match;
find_matching_blocks.create_index = create_index;
diff.calculate_operations = calculate_operations;
diff.render_operations = render_operations;

// Este trecho não funcionou (Error: htmldiff is not defined).
// Para contornar, para definir o outout na linha abaixo, a função diff() foi chamada diretamente.
// if (typeof define === 'function') {
// define([], function () {
//   return diff;
// });
// } else if (typeof module !== 'undefined' && module !== null) {
// module.exports = diff;
// } else {
//  this.htmldiff = diff;
// }

// Diff HTML strings
// let output = htmldiff(originalHTML, newHTML);
let output = diff(originalHTML, newHTML);

// Show HTML diff output as HTML
document.getElementById('output').innerHTML = output;
document.getElementById('outputOriginal').innerHTML = originalHTML;
document.getElementById('outputNew').innerHTML = newHTML;
