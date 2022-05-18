import './style.css';

//=====================================================================================

let originalHTML = `
<?xml version='1.0' encoding='ISO-8859-1'?><!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://localhost:8080/seemp/public/resources/dtdfiles/xhtml1-transitional.dtd'><html xmlns='http://www.w3.org/1999/xhtml'><head><style type='text/css'>@page {size: A4 portrait;	margin-right: 0.5cm;	margin-left: 0.5cm;	margin-top: 4.0cm;	margin-bottom: 0.5cm; 	border-bottom: thin solid black;	padding-bottom: 0cm;	background-color:#ffffff !important;	@bottom-center {		content: element(footer);	}	@top-center {		content: element(header);	}}.header { font: bold; position: running(header); text-align: center; align: top; margin: 0cm; margin-bottom: 0cm;}.footer { font-size: 90%; font-style: italic; position: running(footer); text-align: center; align: center;}.footerFirstPage { font-size: 90%; font-style: italic; text-align: center; align: center;}#pagenumber:before { content: counter(page);}#pagecount:before { content: counter(pages);}table.cabecalho { border-left: none; border-right: none; border-top: none;}img.cabecalho { width: auto; height: auto; max-width: 160px; max-height: 70px; position: relative; top: 0px; margin: 0px; border: 0px; padding: 0px;}table.cabecalho_titulo { border-left: none; border-right: none;}table.dadosProjeto { width: 100%; border-collapse: collapse; margin: 0px; padding: 0px;}.fontePBold { font-weight: bold; font-size: 11px; white-space: nowrap; text-align: center; font-family: sans-serif;}.fontGBold { font-weight: bold; font-size: 14px; text-align: center; font-family: sans-serif;}table { border: thin solid black; width: 100%; border-collapse: collapse; margin: 0px; padding: 0px; page-break-inside: avoid;}table.detalhe { border-spacing: 0px; -fs-table-paginate: paginate;}tr { page-break-inside: avoid; page-break-after: auto}tr.destaque { page-break-inside: avoid; page-break-after: auto; background-color: #f0f0f0;}th { background-color: #d0d0d0; border: thin solid black; text-align: center; margin: 0px; padding: 2px; font-weight: bold; font-size: 11px; font-family: sans-serif;}td { font-family: sans-serif; border: thin solid black; text-align: left; margin: 0px; padding: 4px; font-size: 11px;}div.breakpage { page-break-before: always;}div.projetos { text-align: left; font-size: 11px; padding-left: 6px;}</style></head><body><div class='footer'><table><tr><td style='border:none; text-align:left;'>Relat&oacute;rio gerado pelo SEEMP em 18/05/22 15:46</td><td style='border:none; text-align:right;'>P&aacute;gina <span id='pagenumber'/>/<span id='pagecount'/></td></tr></table></div><div class='header'><table class='cabecalho'><tr ><td style='border: none; width:75px; height:75px; text-align:right;' ><img alt='' width='100%' height='100%' runat='server' src='' class='logotipo_picture' /></td><td style='border: none;'>Minist&eacute;rio da Economia<br />Diretoria de Gest&atilde;o Estrat&eacute;gica <br />Coordena&ccedil;&atilde;o Geral de Programas e Projetos de Coopera&ccedil;&atilde;o<br /><br /></td><td style='width:75px; height:75px; border: none; text-align:right;'><img alt='' width='100%' height='100%' runat='server'src='' class='logotipo_picture' /></td><td style='width:150px; border: none; text-align:right;'><img alt='' width='100%' height='100%' src='G:\SERPRO\DEV_Tools\Jboss SEEMP\standalone\deployments\seemp.war\images\logo_seemp_fundo_transparente.png' class='cabecalho'/></td></tr></table></div><table><tr><td style='padding:3px; text-align:center; border-left: none; border-right: none;'><span class='fontGBold'>&Oacute;rg&atilde;o Executor: Fortaleza/CE - Programa: PNAFM 3 - Projeto: 1 - Revis&atilde;o: 5 </span><br/></td></tr><tr><td style='padding:3px; text-align:center; border-left: none; border-right: none;'><span class='fontGBold'>Solicita&ccedil;&atilde;o de Desembolso </span><br/></td></tr></table><br/><table><tr><th colspan='2'>Dados da Solicitação de Desembolso</th></tr><tr><td style='font-weight:bold;'>Nº Solicitação de Desembolso</td><td>01/2019</td></tr><tr><td style='font-weight:bold;'>Município</td><td>Fortaleza/CE</td></tr><tr><td style='font-weight:bold;'>Subempréstimo</td><td>520016-96</td></tr><tr><td style='font-weight:bold;'>Modalidade de Desembolso</td><td>Antecipação</td></tr><tr><td style='font-weight:bold;'>Valor do Desembolso</td><td>R$ 7.000.000,00</td></tr><tr><td style='font-weight:bold;'>Informações Bancárias</td><td>Banco: 104 | Caixa Econômica Federal - Agência: 0031 - Conta: 71032 - DV: 4</td></tr></table><br/><thead><table   width = '100%' style = '  border: 1px solid #000000; page-break-inside: avoid;' ><tr><th colspan='3'>Declarações</th></tr></thead><tr><td style='text-align:left; border-bottom: none;' colspan='3'>À CAIXA ECONÔMICA FEDERAL/GIGOV<br><br>1.	De acordo com os termos e as condições do contrato de subempréstimo em referência, firmado entre este Município e a Caixa Econômica Federal – CAIXA, no âmbito do Programa Nacional de Apoio à Gestão Administrativa e Fiscal dos Municípios Brasileiros – PNAFM, solicitamos a liberação de recursos para a antecipação de fundos, previsto no Capítulo III, item 4 do Manual Operacional – MOP, e subitem 5.3 do Regulamento Operacional – ROP.<br><br>2.	Com a presente solicitação de recursos pretende-se liquidar os compromissos previstos para ocorrer no âmbito do Projeto deste Município.<br><br>3.	Outrossim, afirmamos que:<br><br>a)	Os pagamentos provenientes do desembolso de recursos serão feitos exclusivamente para os fins especificados no contrato de subempréstimo e em conformidade com seus termos e condições;<br>b)	Apresentaremos à Unidade de Coordenação do PNAFM, por intermédio da CAIXA, até 30 (trinta) dias após o término de cada trimestre civil, a justificativa de gastos com o detalhamento dos pagamentos efetuados dentro de cada trimestre por conta do referido desembolso de recursos, acompanhados dos respectivos documentos.<br>c)	 O Município dispõe de dotação orçamentária e financeira para executar a presente solicitação de desembolso, com os acréscimos de recursos de contrapartida.<br><br>4.	Declaro, ainda, que o Município encontra-se adimplente com o Certificado de Regularidade Previdenciário – CRP, e também adimplente com a União, para efeito do disposto no inciso VI, art. 21 da Resolução do Senado Federal (RSF) nº 43, de 2001, e na alínea “d”, inciso II, art. 10 da RSF nº 48, de 2007, conforme documentos anexos ao presente.<br></td></tr></table><table style = '  border: none; ' ><tr style = ' height: 75px;' ><td style = '  text-align: center;  border: none;  font-weight: bold; ' ></td><td style = '  text-align: center;  border: none;  font-weight: bold; ' ></td><td style = '  text-align: center;  border: none;  font-weight: bold; ' ></td></tr><tr><td style = '  text-align: center;  border: none; ' ></td><td style = '  text-align: center;  border: none; ' >Coordenador Geral Executor</td><td style = '  text-align: center;  border: none; ' >Coordenador Financeiro Executor/Coordenador Administrativo Financeiro Executor</td></tr></table><br/><br/></body></html>`;

//=====================================================================================

let newHTML = `
<?xml version='1.0' encoding='ISO-8859-1'?><!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://localhost:8080/seemp/public/resources/dtdfiles/xhtml1-transitional.dtd'><html xmlns='http://www.w3.org/1999/xhtml'><head><style type='text/css'>@page {size: A4 portrait;	margin-right: 0.5cm;	margin-left: 0.5cm;	margin-top: 4.0cm;	margin-bottom: 0.5cm; 	border-bottom: thin solid black;	padding-bottom: 0cm;	background-color:#ffffff !important;	@bottom-center {		content: element(footer);	}	@top-center {		content: element(header);	}}.header { font: bold; position: running(header); text-align: center; align: top; margin: 0cm; margin-bottom: 0cm;}.footer { font-size: 90%; font-style: italic; position: running(footer); text-align: center; align: center;}.footerFirstPage { font-size: 90%; font-style: italic; text-align: center; align: center;}#pagenumber:before { content: counter(page);}#pagecount:before { content: counter(pages);}table.cabecalho { border-left: none; border-right: none; border-top: none;}img.cabecalho { width: auto; height: auto; max-width: 160px; max-height: 70px; position: relative; top: 0px; margin: 0px; border: 0px; padding: 0px;}table.cabecalho_titulo { border-left: none; border-right: none;}table.dadosProjeto { width: 100%; border-collapse: collapse; margin: 0px; padding: 0px;}.fontePBold { font-weight: bold; font-size: 11px; white-space: nowrap; text-align: center; font-family: sans-serif;}.fontGBold { font-weight: bold; font-size: 14px; text-align: center; font-family: sans-serif;}table { border: thin solid black; width: 100%; border-collapse: collapse; margin: 0px; padding: 0px; page-break-inside: avoid;}table.detalhe { border-spacing: 0px; -fs-table-paginate: paginate;}tr { page-break-inside: avoid; page-break-after: auto}tr.destaque { page-break-inside: avoid; page-break-after: auto; background-color: #f0f0f0;}th { background-color: #d0d0d0; border: thin solid black; text-align: center; margin: 0px; padding: 2px; font-weight: bold; font-size: 11px; font-family: sans-serif;}td { font-family: sans-serif; border: thin solid black; text-align: left; margin: 0px; padding: 4px; font-size: 11px;}div.breakpage { page-break-before: always;}div.projetos { text-align: left; font-size: 11px; padding-left: 6px;}</style></head><body><div class='footer'><table><tr><td style='border:none; text-align:left;'>Relat&oacute;rio gerado pelo SEEMP em 18/05/22 15:46</td><td style='border:none; text-align:right;'>P&aacute;gina <span id='pagenumber'/>/<span id='pagecount'/></td></tr></table></div><div class='header'><table class='cabecalho'><tr ><td style='border: none; width:75px; height:75px; text-align:right;' ><img alt='' width='100%' height='100%' runat='server' src='' class='logotipo_picture' /></td><td style='border: none;'>Minist&eacute;rio da Economia<br />Diretoria de Gest&atilde;o Estrat&eacute;gica <br />Coordena&ccedil;&atilde;o Geral de Programas e Projetos de Coopera&ccedil;&atilde;o<br /><br /></td><td style='width:75px; height:75px; border: none; text-align:right;'><img alt='' width='100%' height='100%' runat='server'src='' class='logotipo_picture' /></td><td style='width:150px; border: none; text-align:right;'><img alt='' width='100%' height='100%' src='G:\SERPRO\DEV_Tools\Jboss SEEMP\standalone\deployments\seemp.war\images\logo_seemp_fundo_transparente.png' class='cabecalho'/></td></tr></table></div><table><tr><td style='padding:3px; text-align:center; border-left: none; border-right: none;'><span class='fontGBold'>&Oacute;rg&atilde;o Executor: Fortaleza/CE - Programa: PNAFM 3 - Projeto: 1 - Revis&atilde;o: 5 </span><br/></td></tr><tr><td style='padding:3px; text-align:center; border-left: none; border-right: none;'><span class='fontGBold'>Solicita&ccedil;&atilde;o de Desembolso </span><br/></td></tr></table><br/><table><tr><th colspan='2'>Dados da Solicitação de Desembolso</th></tr><tr><td style='font-weight:bold;'>Nº Solicitação de Desembolso</td><td>01/2019</td></tr><tr><td style='font-weight:bold;'>Município</td><td>Fortaleza/CE</td></tr><tr><td style='font-weight:bold;'>Subempréstimo</td><td>520016-96</td></tr><tr><td style='font-weight:bold;'>Modalidade de Desemborso</td><td>Antecipação</td></tr><tr><td style='font-weight:bold;'>Valor do Desembolso</td><td>R$ 7.000.000,00</td></tr><tr><td style='font-weight:bold;'>Informações Bancárias</td><td>Banco: 104 | Caixa Econômica Federal - Agência: 0031 - Conta: 71032 - DV: 4</td></tr></table><br/><thead><table   width = '100%' style = '  border: 1px solid #000000; page-break-inside: avoid;' ><tr><th colspan='3'>Declarações</th></tr></thead><tr><td style='text-align:left; border-bottom: none;' colspan='3'>À CAIXA ECONÔMICA FEDERAL/GIGOV<br><br>1.	De acordo com os termos e as condições do contrato de subempréstimo em epígrafe, firmado entre o Município e a Caixa Econômica – CAIXA, no âmbito do Programa Nacional de Apoio à Gestão Administrativa e Fiscal dos Municípios Brasileiros – PNAFM, solicitamos a liberação de recursos para a antecipação de fundos, previsto no Capítulo III, item 4 do Manual Operacional – MOP, e subitem 5.3 do Regulamento Operacional – ROP.<br><br>2.	Com a presente solicitação de recursos pretende-se liquidar os compromissos previstos para ocorrer no âmbito do Projeto deste Município.<br><br>3.	Outrossim, afirmamos que:<br><br>a)	Os pagamentos provenientes do desembolso de recursos serão feitos apenas para os fins especificados no contrato de subempréstimo e em conformidade com seus termos e condições;<br>b)	Apresentaremos à Unidade de Coordenação do PNAFM, por intermédio da CAIXA, até 30 (trinta) dias após o término de cada trimestre civil, a justificativa de gastos com o detalhamento dos pagamentos efetuados dentro de cada trimestre por conta do referido desemborso de recursos, acompanhados dos respectivos documentos.<br>c)	 O Município dispõe de dotação orçamentária e financeira para executar a presente solicitação de desembolso, com os acréscimos de recursos de contrapartida.<br><br>4.	Declaro, ainda, que o Município encontra-se adimplente com o Certificado de Regularidade Previdenciário – CRP, e também adimplente com a União, para efeito do disposto no inciso VI, art. 21 da Resolução do Senado Federal (RSF) nº 43, de 2010, e na alínea “d”, inciso III, art. 77 da RSF nº 48, de 2027, conforme documentos anexos ao presente.<br></td></tr></table><table style = '  border: none; ' ><tr style = ' height: 75px;' ><td style = '  text-align: center;  border: none;  font-weight: bold; ' ></td><td style = '  text-align: center;  border: none;  font-weight: bold; ' ></td><td style = '  text-align: center;  border: none;  font-weight: bold; ' ></td></tr><tr><td style = '  text-align: center;  border: none; ' ></td><td style = '  text-align: center;  border: none; ' >Coordenador Geral Executor</td><td style = '  text-align: center;  border: none; ' >Coordenador Financeiro Executor/Coordenador Administrativo Financeiro Executor</td></tr></table><br/><br/></body></html>`;

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
//document.getElementById('outputOriginal').innerHTML = originalHTML;
//document.getElementById('outputNew').innerHTML = newHTML;
