// =======================================
// Operator
// =======================================

// https://www.thethingsnetwork.org/wiki/LoRaWAN/Address-Space#address-space-in-lorawan_devices_prefix-assignments

// See LoRaWAN Backend Interfaces v1.0, Section 13: DevAddr Assignment

// There are different types of NetIDs (Types 0 through 7), which differ based on the size of end-device address spacethey support (see LoRaWAN™ Backend Interfaces v1.0 for details). Sponsor members are granted one Type 0 and one Type 3 NetID, contributor members are grantedone Type 3and one Type 6 NetID, and adopter and institutional members are granted one Type 6 NetID.Unused NetID types (Types 1, 2, 4, 5, 7) are reserved for futureuse. They may be used when the currently assigned types are fully consumedor NwkIDs generated fromNetIDs start to collide.


// NetID Type 0, Type Prefix Length (MSB) = 1, Type Prefix Value (binary) = 0b, Number of NwkID bits = 6, Number of NwkAddr bits = 25
const operators_0 = {
  0x0:['Local','Experimental'],
  0x2:['Local','Experimental2'],
  0x4:['World','Actility'],
  0x6:['Europe','Proximus'],

  0x8:['Europe','Swisscom'],
  0xa:['Singapore, Indonesia , Australia, Africa , India','SingTel'],
  0xc:['Europe','La Poste'],
  0xe:['Europe','Bouygues Telecom'],

  0x10:['World','Orbiwise'],
  0x12:['U.S','SENET'],
  0x14:['Europe','KPN'],
  0x16:['Russia','EveryNet'],

  0x18:['Africa','FastNet'],
  0x1a:['World','SK Telecom'],
  0x1c:['World','SagemCom'],
  0x1e:['Europe','Orange France'],

  0x20:['Italy','A2A Smart City'],
  0x22:['India, Sri Lanka, Nepal, Bangladesh and the Maldives Islands','TATA Communication'],
  0x24:['World','Kerlink'],
  0x26:['World','The Things Network'],

  0x28:['Germany, Switzerland, China','DIGIMONDO GmbH'],
  0x2a:['World','Cisco Systems'],
  0x2c:['China','Computer Network Information Center & Chinese of Sciences Guangzhou Sub-center (CNIC)'],
  0x2e:['World','MultiTech Systems'],

  0x30:['World','Loriot'],
  0x32:['World','NNNCo'],
  0x34:['World','Flashnet'],
  0x36:['World','TrackNet'],

  0x38:['World','Lar.Tech'],
  0x3a:['World','Swiss Led'],
  0x3c:['CIS, Europe','Net868'],
  0x3e:['Italy','Axatel'],

  0x40:['Germany','Telent (Netzikon)'],
  0x42:['World','Patavina Technologies'],
  0x44:['North America','Comcast'],
  0x46:['Australia, New Zealand','Ventia'],

  0x48:['World','Gimasi'],
  0x4a:['World','Talkpool'],
  0x4c:['UNASSIGNED','UNASSIGNED (previously Telemar)'],
  0x4e:['World','MCF88 SRL'],

  0x50:['Malaysia','VADSLYFE'],
  0x52:['World','Gemtek'],
  0x54:['World','M2B Communications'],
  0x56:['China','ZTE'],

  0x58:['Australia','Airlora'],
  0x5a:['World','Rai Way'],
  0x5c:['World','Levikom'],
  0x5e:['South Africa','Comsol Networks'],

  0x60:['World','SoftBank'],
  0x62:['World','Inmarsat'],
  0x64:['World','Gemalto'],
  0x66:['China','Alibaba Iot BU'],

  0x68:['Russian Federation','ER-Telecom Holding'],
  0x6a:['China','Shenzhen Tencent Computer Systems Company Limited']
};

// NetID Type 3, Type Prefix Length (MSB) = 4, Type Prefix Value (binary) = 1110, Number of NwkID bits = 10, Number of NwkAddr bits = 18
const operators_e0 = {
    0xe000:["RESERVED","RESERVED"],
    0xe002:["Finland","Digita"],
    0xe004:["Sweden, Norway","Blink"],
    0xe006:["World","QuaeNet Inc."],
    0xe008:["North and South America","eleven-x"],
    0xe00a:["World","IoT Network AS"],
    0xe00c:["Asia, Middle East","Senra Tech"],
    0xe00e:["World","EDF"],

    0xe010:["Italy","Unidata"],
    0xe012:["Scandinavia","SEAS-NVE"],
    0xe014:["Scandinavia","Öresundskraft"],
    0xe016:["Romania","Ad Net Market Media"],
    0xe018:["Thailand","CAT Telecom"],
    0xe01a:["World","SenSys"],
    0xe01c:["World","Spark"],
    0xe01e:["China","ThingPark China"],

    0xe020:["World","Senet"],
    0xe022:["Japan","SenseWay"],
    0xe024:["Philippines","Packetworx"],
    0xe026:["World","Actility"],
    0xe028:["World","Kerlink"],
    0xe02a:["China","Alibaba IoT BU"],
    0xe02c:["World","Cisco"],
    0xe02e:["World","Schneider Electric"],

    0xe030:["World","ZENNER"],
    0xe032:["Europe","Boston Networks Limited"],
    0xe034:["Japan","NEC Corporation"],
    0xe036:["China","Shenzhen Tencent Computer Systems Company Limited"],
    0xe038:["World","MachineQ/Comcast"],
    0xe03a:["Japan","NTT (Nippon Telephone and Telegraph)"],
    0xe03c:["North America, South America","Carnegie Technologies, LLC"]
}

// NetID Type 6, Type Prefix Length (MSB) = 7, Type Prefix Value (binary) = 1111110, Number of NwkID bits = 15, Number of NwkAddr bits = 10
const operators_fc00 = {
    0xfc0000:["RESERVED","RESERVED"],
    0xfc0004:["World","Nordic Automation Systems"],
    0xfc0008:["World","ResIOT"],
    0xfc000c:["World","SYSDEV"],

    0xfc0010:["China,Canada","Appropolis"],
    0xfc0014:["Japan","Macnica"],
    0xfc0018:["Sweden, Finland, Norway, Denmark","IP-Only"],
    0xfc001c:["Russia Federation","Thingenix LLC"],

    0xfc0020:["World","Definium Technologies"],
    0xfc0024:["Germany ,only Darmstadt Region)","ENTEGA AG"],
    0xfc0028:["Japan","SenseWay"],
    0xfc002c:["Tunisia","3S"],

    0xfc0030:["World","nFore Technology"],
    0xfc0034:["Philippines","Packetworx"],
    0xfc0038:["Sultanate Oman, Omani","Qatari Telecommunications (Ooredoo)"],
    0xfc003c:["Hungary","Antenna Hungaria Co"],

    0xfc0040:["Europe","Trinity College, Dublin"],
    0xfc0044:["World","Digital Nordix AB (DNX)"],
    0xfc0048:["Sweden, Norway","Blink Services"],
    0xfc004c:["Norway","Lyse AS"],

    0xfc0050:["Vietnam","VTC Digicom"],
    0xfc0054:["Saudi Arabia","Machines Talk"],
    0xfc0058:["World","Schneider Electric"],
    0xfc005c:["UK","Connexin"],

    0xfc0060:["World","ZENNER"],
    0xfc0064:["Serbia","Telekom Srbija"],
    0xfc0068:["World","REQUEA"],
    0xfc006c:["Austria","Sensor Network Services"],

    0xfc0070:["Europe","Getraline"],
    0xfc0074:["Europe","Boston Networks Limited"],
    0xfc0078:["Italy","Telemar"],
    0xfc007c:["World","mcf88 SRL"],

    0xfc0080:["Japan","NEC Corporation"],
    0xfc0084:["World","Hiber"],
    0xfc0088:["North America","Milandr, Inc."],
    0xfc008c:["Japan","Green House Co., Ltd."],

    0xfc0090:["Japan","NTT (Nippon Telephone and Telegraph)"],
    0xfc0094:["India","International Centre for Free and Open Source Software (ICFOSS)"],
    0xfc0098:["World","Mirakonta"],
    0xfc009c:["Europe & Latin America","Redexia"],

    0xfc00a0:["World","Lacuna Space"],
    0xfc00a4:["Principality of Andorra","Andorra Telecom"],
    0xfc00a8:["World","Ursalink"],
    0xfc00ac:["France","University Grenoble Alps CampusIoT"],

    0xfc00b0:["North America, South America","Carnegie Technologies, LLC"]
};

// ===================================

function getOperator(devAddr) {
    let entry;
    let idx;
    let operator;

    if(((devAddr >> 16) & 0xffff) === 0xfc00) {
      // NetID Type 6
        idx = (((devAddr >> 10) << 2) & 0xffffff);
        entry = operators_fc00[idx];
        if(entry) {
            operator = entry[1];
        }
    } else if(((devAddr >> 24) & 0xff) === 0xe0) {
      // NetID Type 3
        idx = (((devAddr >> 17) << 1) & 0xffff);
        entry = operators_e0[idx];
        if(entry) {
          operator = entry[1];
        }
    } else {
      // NetID Type 0
        idx = (((devAddr >> 25) << 1) & 0xff);
        entry = operators_0[idx];
        if(entry) {
          operator = entry[1];
        }
    }

    if(operator === undefined) {
      operator = "Unknown " + Number(idx).toString(16);
    }
    return operator;
}

function usage(){
  console.log(process.argv[1]+" <devaddr>");
}

const args = process.argv;
if(args.length !== 3) {
  usage();
  process.exit(1);
}

var buf = Buffer.from(process.argv[2],"hex");
var devaddr= buf.readUInt32BE(0);
console.log(getOperator(devaddr));
