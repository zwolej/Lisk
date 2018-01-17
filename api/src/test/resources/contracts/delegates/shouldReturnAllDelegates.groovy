package contracts.delegates

import org.springframework.cloud.contract.spec.Contract

Contract.make {
    request {
        method 'GET'
        url 'api/delegates'
    }
    response {
        status 200
        body("""
  [{"address":"10310263204519541551L","username":"liskit","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=197"},{"address":"10368229158858685154L","username":"zy1349","poolShare":25,"website":""},{"address":"10804763751453501689L","username":"communitypool","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1268"},{"address":"10817258342075237585L","username":"bilibili","poolShare":25,"website":""},{"address":"10839494368003872009L","username":"thepool","poolShare":80,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1366"},{"address":"10934306629196932988L","username":"sgdias","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=121"},{"address":"11137319173876739343L","username":"crolisk","poolShare":25,"website":""},{"address":"11324865266990093379L","username":"hua","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=341"},{"address":"11349207601124731709L","username":"catstar","poolShare":25,"website":""},{"address":"11380384760969655418L","username":"mrv","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=292"},{"address":"11416406146107258985L","username":"forrest","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1300"},{"address":"11531556153048102711L","username":"cai","poolShare":25,"website":""},{"address":"12490495662800209583L","username":"crodam","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=125"},{"address":"1251806989552612274L","username":"gdtpool","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1506"},{"address":"12654423644480926777L","username":"joo5ty","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1543"},{"address":"12731041415715717263L","username":"lwyrup","poolShare":25,"website":""},{"address":"13088626869816331666L","username":"splatters","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=153"},{"address":"13214966370334815499L","username":"someonesomeone","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=170"},{"address":"13943256167405531820L","username":"iii.element.iii","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1210"},{"address":"14212484126746187777L","username":"spacetrucker","poolShare":25,"website":""},{"address":"14593474056247442712L","username":"liskpool_com_01","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1130"},{"address":"14871479939815286293L","username":"5an1ty","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1521"},{"address":"15056673209583244182L","username":"goldeneye","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1145"},{"address":"15435156702499576722L","username":"acheng","poolShare":25,"website":""},{"address":"15458001843048965724L","username":"leo","poolShare":25,"website":""},{"address":"15779162366634226730L","username":"kaystar","poolShare":25,"website":""},{"address":"15833684874495472493L","username":"veriform","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1227"},{"address":"15963641443478982497L","username":"redsn0w","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=185"},{"address":"15990849124962899351L","username":"loveforever","poolShare":25,"website":""},{"address":"16010222169256538112L","username":"4miners.net","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1215"},{"address":"16152155423726476379L","username":"shinekami","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1465"},{"address":"16356037149140416854L","username":"liskgate","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=290"},{"address":"16458712373486968818L","username":"adrianhunter","poolShare":25,"website":""},{"address":"16564709774155482395L","username":"vi1son","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1132"},{"address":"16979707772780220012L","username":"grumlin","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1186"},{"address":"17059886363552285239L","username":"vrlc92","poolShare":25,"website":""},{"address":"1721671924473554971L","username":"chamberlain","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1311"},{"address":"17438085793668748066L ","username":"devasive","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=241"},{"address":"17584737652648280645L","username":"eclipsun","poolShare":25,"website":""},{"address":"17589464102226817833L","username":"slasheks","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=155"},{"address":"17621212458226596154L","username":"robinhood","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1179"},{"address":"17944961271973053062L","username":"mac","poolShare":25,"website":""},{"address":"18069265829053472143L","username":"carolina","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1149"},{"address":"18170322128905228876L","username":"jixie","poolShare":25,"website":""},{"address":"1848933911281528224L","username":"china","poolShare":25,"website":""},{"address":"1856675932034497943L","username":"blackswan","poolShare":25,"website":""},{"address":"194109334904015388L","username":"gr33ndrag0n","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=143"},{"address":"2004134067472288525L","username":"liberspirita","poolShare":25,"website":""},{"address":"2059909095002215101L","username":"eastwind_ja","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1389"},{"address":"2074128296889030323L","username":"xujian","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1196"},{"address":"2324852447570841050L","username":"dakk","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1094"},{"address":"2433857930558702776L","username":"tembo","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1158"},{"address":"269987742292481322L","username":"khitan","poolShare":25,"website":""},{"address":"293347761883204765L","username":"liskroad","poolShare":25,"website":""},{"address":"3026381832248350807L","username":"corsaro","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=187"},{"address":"3125853987625788223L","username":"mrgr","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1191"},{"address":"3237673512436243226L","username":"panzer","poolShare":25,"website":""},{"address":"3355233929585989338L","username":"yuandian","poolShare":25,"website":""},{"address":"3583773362804762494L","username":"luxiang7890","poolShare":25,"website":""},{"address":"3665594920317480024L","username":"will","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1360"},{"address":"3706844901938026254L","username":"philhellmuth","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1488"},{"address":"3741683474356548491L","username":"nerigal","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1128"},{"address":"3920536512311562482L","username":"honeybee","poolShare":25,"website":""},{"address":"4034636149257692063L","username":"liskpool.top","poolShare":25,"website":""},{"address":"4127534797357267194L","username":"elonhan","poolShare":25,"website":""},{"address":"4134531592799494959L","username":"dakini","poolShare":25,"website":""},{"address":"4225472009432714154L","username":"kushed.delegate","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1155"},{"address":"4318457725971796647L","username":"index","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1533"},{"address":"4402625644334434270L","username":"liskjp","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1229"},{"address":"4980451641598555896L","username":"vipertkd","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=246"},{"address":"5241063366434807683L","username":"forger_of_lisk","poolShare":25,"website":""},{"address":"5472860176536642962L","username":"phinx","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1156"},{"address":"5908902152314233521L","username":"goodtimes","poolShare":25,"website":""},{"address":"5961970541244509405L","username":"hong","poolShare":25,"website":""},{"address":"6165534766664619667L","username":"carbonara","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1231"},{"address":"6281405850162033335L","username":"bigfisher","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1230"},{"address":"6356913781456505636L","username":"rooney","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1247"},{"address":"6674162710313805686L","username":"ntelo","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1139"},{"address":"6787154358850114730L","username":"cc001","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=54"},{"address":"6853061742992593192L","username":"punkrock","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=86"},{"address":"7093160678988084393L","username":"bigtom","poolShare":25,"website":""},{"address":"7187501713766457398L","username":"seven","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1473"},{"address":"7292106026137978431L","username":"stellardynamic","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1328"},{"address":"731774066839038986L","username":"menfei","poolShare":25,"website":""},{"address":"7387265715586251506L","username":"luukas","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1436"},{"address":"7621048351401864465L","username":"joel","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1520"},{"address":"765057514163296046L","username":"ondin","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=311"},{"address":"7714731151444318219L","username":"savetheworld","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1131"},{"address":"7725745407648930648L","username":"grajsondelegate","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=130"},{"address":"7785089688506705621L","username":"luiz","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1181"},{"address":"7910612402065369026L","username":"jiandan","poolShare":25,"website":""},{"address":"7984234674117396356L","username":"bioly","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=237"},{"address":"801959860607939388L","username":"badman0316","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1199"},{"address":"8466190194079547581L","username":"hagie","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1190"},{"address":"8661902537380848029L","username":"augurproject","poolShare":25,"website":""},{"address":"8668463642800443353L","username":"phoenix1969","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1141"},{"address":"8675947023277781177L","username":"samuray","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=136"},{"address":"8858064098621060602L","username":"hmachado","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1231"},{"address":"9102643396261850794L","username":"vekexasia","poolShare":25,"website":"https://forum.lisk.io/viewtopic.php?f=48&t=1546"},{"address":"9698516298298732428L","username":"kc","poolShare":25,"website":""},{"address":"977255361881067219L","username":"threelittlepig","poolShare":25,"website":""}]
  """)
        headers {
            header('Content-Type': 'application/json;charset=UTF-8')
        }
    }
}