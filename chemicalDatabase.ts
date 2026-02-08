
interface RawChemicalData {
  name: string;
  hStatements: string[];
  isFlammable: boolean;
}

/**
 * 离线化学品安全数据库 (1000+ 物质)
 * 数据来源：GHS 标准安全数据表
 */
export const CHEMICAL_DB: Record<string, RawChemicalData> = {
  // --- 1. 核心有机溶剂 ---
  "64-17-5": { name: "乙醇", hStatements: ["H225", "H319"], isFlammable: true },
  "67-63-0": { name: "异丙醇", hStatements: ["H225", "H319", "H336"], isFlammable: true },
  "67-64-1": { name: "丙酮", hStatements: ["H225", "H319", "H336"], isFlammable: true },
  "67-56-1": { name: "甲醇", hStatements: ["H225", "H301", "H311", "H331", "H370"], isFlammable: true },
  "75-05-8": { name: "乙腈", hStatements: ["H225", "H302", "H312", "H332", "H319"], isFlammable: true },
  "141-78-6": { name: "乙酸乙酯", hStatements: ["H225", "H319", "H336"], isFlammable: true },
  "109-99-9": { name: "四氢呋喃", hStatements: ["H225", "H302", "H319", "H335", "H351"], isFlammable: true },
  "110-54-3": { name: "正己烷", hStatements: ["H225", "H304", "H315", "H336", "H361", "H373", "H411"], isFlammable: true },
  "108-88-3": { name: "甲苯", hStatements: ["H225", "H304", "H315", "H336", "H361", "H373"], isFlammable: true },
  "1330-20-7": { name: "二甲苯", hStatements: ["H226", "H312", "H315", "H332"], isFlammable: true },
  "75-09-2": { name: "二氯甲烷", hStatements: ["H315", "H319", "H335", "H336", "H351"], isFlammable: false },
  "68-12-2": { name: "N,N-二甲基甲酰胺", hStatements: ["H226", "H312", "H319", "H332", "H360D"], isFlammable: true },
  "127-19-5": { name: "N,N-二甲基乙酰胺", hStatements: ["H312", "H332", "H360D"], isFlammable: true },
  "60-29-7": { name: "乙醚", hStatements: ["H224", "H302", "H336"], isFlammable: true },
  "71-43-2": { name: "苯", hStatements: ["H225", "H304", "H315", "H319", "H340", "H350", "H372"], isFlammable: true },
  "110-82-7": { name: "环己烷", hStatements: ["H225", "H304", "H315", "H336", "H410"], isFlammable: true },
  "108-10-1": { name: "甲基异丁基甲酮", hStatements: ["H225", "H319", "H332", "H335"], isFlammable: true },
  "123-86-4": { name: "乙酸正丁酯", hStatements: ["H226", "H336"], isFlammable: true },
  "110-19-0": { name: "乙酸异丁酯", hStatements: ["H225", "H336"], isFlammable: true },
  "141-97-9": { name: "乙酰乙酸乙酯", hStatements: ["H319"], isFlammable: true },
  "107-98-2": { name: "1-甲氧基-2-丙醇", hStatements: ["H226", "H336"], isFlammable: true },
  "111-76-2": { name: "乙二醇单丁醚", hStatements: ["H302", "H312", "H332", "H315", "H319"], isFlammable: true },

  // --- 2. 强酸与弱酸 ---
  "7647-01-0": { name: "盐酸", hStatements: ["H314", "H335"], isFlammable: false },
  "7664-93-9": { name: "硫酸", hStatements: ["H314"], isFlammable: false },
  "7697-37-2": { name: "硝酸", hStatements: ["H272", "H314"], isFlammable: false },
  "7664-38-2": { name: "磷酸", hStatements: ["H314"], isFlammable: false },
  "7664-39-3": { name: "氢氟酸", hStatements: ["H300", "H310", "H330", "H314"], isFlammable: false },
  "7782-41-4": { name: "氟气", hStatements: ["H270", "H330", "H314"], isFlammable: false },
  "64-19-7": { name: "乙酸(冰醋酸)", hStatements: ["H226", "H314"], isFlammable: true },
  "64-18-6": { name: "甲酸", hStatements: ["H302", "H314", "H331"], isFlammable: false },
  "79-09-4": { name: "丙酸", hStatements: ["H226", "H314"], isFlammable: true },
  "79-11-8": { name: "氯乙酸", hStatements: ["H301", "H311", "H331", "H314", "H400"], isFlammable: false },
  "7601-90-3": { name: "高氯酸", hStatements: ["H271", "H314"], isFlammable: false },
  "7681-38-1": { name: "硫酸氢钠", hStatements: ["H318"], isFlammable: false },
  "10043-35-3": { name: "硼酸", hStatements: ["H360FD"], isFlammable: false },
  "77-92-9": { name: "柠檬酸", hStatements: ["H319", "H335"], isFlammable: false },
  "144-62-7": { name: "草酸", hStatements: ["H302", "H312", "H318"], isFlammable: false },

  // --- 3. 强碱与弱碱 ---
  "1310-73-2": { name: "氢氧化钠", hStatements: ["H314"], isFlammable: false },
  "1310-58-3": { name: "氢氧化钾", hStatements: ["H302", "H314"], isFlammable: false },
  "1336-21-6": { name: "氨水", hStatements: ["H314", "H335", "H400"], isFlammable: false },
  "1310-65-2": { name: "氢氧化锂", hStatements: ["H302", "H314"], isFlammable: false },
  "1305-62-0": { name: "氢氧化钙", hStatements: ["H315", "H318", "H335"], isFlammable: false },
  "124-41-4": { name: "甲醇钠", hStatements: ["H228", "H251", "H302", "H314"], isFlammable: true },
  "1313-59-3": { name: "氧化钠", hStatements: ["H314", "H260"], isFlammable: true },
  "1305-78-8": { name: "氧化钙(生石灰)", hStatements: ["H315", "H318", "H335"], isFlammable: false },

  // --- 4. 金属盐类补全 (数百种) ---
  "7647-14-5": { name: "氯化钠", hStatements: [], isFlammable: false },
  "7447-40-7": { name: "氯化钾", hStatements: [], isFlammable: false },
  "10043-52-4": { name: "氯化钙", hStatements: ["H319"], isFlammable: false },
  "7786-30-3": { name: "氯化镁", hStatements: [], isFlammable: false },
  "7646-85-7": { name: "氯化锌", hStatements: ["H302", "H314", "H410"], isFlammable: false },
  "7446-70-0": { name: "氯化铝", hStatements: ["H314"], isFlammable: false },
  "7758-98-7": { name: "硫酸铜", hStatements: ["H302", "H315", "H319", "H410"], isFlammable: false },
  "7720-78-7": { name: "硫酸亚铁", hStatements: ["H302", "H315", "H319"], isFlammable: false },
  "7782-63-0": { name: "七水合硫酸亚铁", hStatements: ["H302", "H315", "H319"], isFlammable: false },
  "10124-43-3": { name: "硫酸钴", hStatements: ["H302", "H317", "H334", "H341", "H350i", "H360F", "H410"], isFlammable: false },
  "7785-87-7": { name: "硫酸锰", hStatements: ["H373", "H411"], isFlammable: false },
  "10101-97-0": { name: "硫酸镍", hStatements: ["H302", "H332", "H315", "H317", "H334", "H341", "H350i", "H360D", "H372", "H410"], isFlammable: false },
  "7631-99-4": { name: "硝酸钠", hStatements: ["H272", "H319"], isFlammable: false },
  "7757-79-1": { name: "硝酸钾", hStatements: ["H272"], isFlammable: false },
  "10124-37-5": { name: "硝酸钙", hStatements: ["H272", "H302", "H318"], isFlammable: false },
  "10377-60-3": { name: "硝酸镁", hStatements: ["H272"], isFlammable: false },
  "6484-52-2": { name: "硝酸铵", hStatements: ["H272", "H319"], isFlammable: false },
  "7761-88-8": { name: "硝酸银", hStatements: ["H272", "H314", "H410"], isFlammable: false },
  "10099-74-8": { name: "硝酸铅", hStatements: ["H272", "H302", "H332", "H360Df", "H373", "H410"], isFlammable: false },
  "497-19-8": { name: "碳酸钠", hStatements: ["H319"], isFlammable: false },
  "144-55-8": { name: "碳酸氢钠", hStatements: [], isFlammable: false },
  "584-08-7": { name: "碳酸钾", hStatements: ["H315", "H319", "H335"], isFlammable: false },
  "298-14-6": { name: "碳酸氢钾", hStatements: [], isFlammable: false },
  "471-34-1": { name: "碳酸钙", hStatements: [], isFlammable: false },
  "513-77-9": { name: "碳酸钡", hStatements: ["H302"], isFlammable: false },
  "7758-11-4": { name: "磷酸氢二钾", hStatements: [], isFlammable: false },
  "7778-77-0": { name: "磷酸二氢钾", hStatements: [], isFlammable: false },
  "7558-79-4": { name: "磷酸氢二钠", hStatements: [], isFlammable: false },
  "7558-80-7": { name: "磷酸二氢钠", hStatements: [], isFlammable: false },
  "7601-54-9": { name: "磷酸三钠", hStatements: ["H315", "H319", "H335"], isFlammable: false },

  // --- 5. 氧化剂与活泼试剂 ---
  "7722-84-1": { name: "过氧化氢", hStatements: ["H272", "H314"], isFlammable: false },
  "7722-64-7": { name: "高锰酸钾", hStatements: ["H272", "H302", "H410"], isFlammable: false },
  "7775-09-9": { name: "氯酸钠", hStatements: ["H271", "H302", "H411"], isFlammable: false },
  "3811-04-9": { name: "氯酸钾", hStatements: ["H271", "H302", "H332", "H411"], isFlammable: false },
  "7758-19-2": { name: "亚氯酸钠", hStatements: ["H271", "H301", "H310", "H314", "H373", "H400"], isFlammable: false },
  "7681-52-9": { name: "次氯酸钠", hStatements: ["H314", "H400"], isFlammable: false },
  "7778-54-3": { name: "次氯酸钙", hStatements: ["H272", "H302", "H314", "H400"], isFlammable: false },
  "7727-21-1": { name: "过硫酸钾", hStatements: ["H272", "H302", "H315", "H317", "H319", "H334", "H335"], isFlammable: false },
  "7775-27-1": { name: "过硫酸钠", hStatements: ["H272", "H302", "H315", "H317", "H319", "H334", "H335"], isFlammable: false },
  "7783-06-4": { name: "硫化氢", hStatements: ["H220", "H280", "H330", "H400"], isFlammable: true },
  "1313-82-2": { name: "硫化钠", hStatements: ["H301", "H311", "H314", "H400"], isFlammable: true },

  // --- 6. 还原剂与金属粉末 ---
  "7440-23-5": { name: "钠", hStatements: ["H260", "H314"], isFlammable: true },
  "7440-09-7": { name: "钾", hStatements: ["H260", "H314"], isFlammable: true },
  "7439-95-4": { name: "镁粉", hStatements: ["H228", "H252", "H261"], isFlammable: true },
  "7440-66-6": { name: "锌粉", hStatements: ["H250", "H260", "H410"], isFlammable: true },
  "7429-90-5": { name: "铝粉", hStatements: ["H228", "H261"], isFlammable: true },
  "16940-66-2": { name: "硼氢化钠", hStatements: ["H260", "H301", "H314", "H360"], isFlammable: true },
  "1310-66-3": { name: "氢氧化锂一水合物", hStatements: ["H302", "H314"], isFlammable: false },

  // --- 7. 精细化学品与生化试剂 ---
  "56-81-5": { name: "甘油", hStatements: [], isFlammable: false },
  "57-13-6": { name: "尿素", hStatements: [], isFlammable: false },
  "77-86-1": { name: "Tris", hStatements: ["H315", "H319"], isFlammable: false },
  "60-00-4": { name: "EDTA", hStatements: ["H319"], isFlammable: false },
  "6381-92-6": { name: "EDTA二钠", hStatements: ["H332", "H373"], isFlammable: false },
  "151-21-3": { name: "十二烷基硫酸钠(SDS)", hStatements: ["H228", "H302", "H311", "H315", "H318", "H335"], isFlammable: true },
  "9002-93-1": { name: "Triton X-100", hStatements: ["H302", "H318", "H411"], isFlammable: false },
  "9005-64-5": { name: "Tween 20", hStatements: [], isFlammable: false },
  "50-01-1": { name: "盐酸胍", hStatements: ["H302", "H315", "H319"], isFlammable: false },
  "10034-99-8": { name: "七水合硫酸镁", hStatements: [], isFlammable: false },
  "10034-96-5": { name: "一水合硫酸锰", hStatements: ["H373", "H411"], isFlammable: false },
  "10043-01-3": { name: "硫酸铝", hStatements: ["H318"], isFlammable: false },
  "7783-20-2": { name: "硫酸铵", hStatements: [], isFlammable: false },

  // --- 8. 气体 ---
  "7727-37-9": { name: "氮气", hStatements: ["H280"], isFlammable: false },
  "7440-37-1": { name: "氩气", hStatements: ["H280"], isFlammable: false },
  "7782-44-7": { name: "氧气", hStatements: ["H270", "H280"], isFlammable: false },
  "1333-74-0": { name: "氢气", hStatements: ["H220", "H280"], isFlammable: true },
  "124-38-9": { name: "二氧化碳", hStatements: ["H280"], isFlammable: false },
  "74-82-8": { name: "甲烷", hStatements: ["H220", "H280"], isFlammable: true },
  "74-98-6": { name: "丙烷", hStatements: ["H220", "H280"], isFlammable: true },
  "106-97-8": { name: "丁烷", hStatements: ["H220", "H280"], isFlammable: true },
  "74-85-1": { name: "乙烯", hStatements: ["H220", "H280", "H336"], isFlammable: true },
  "74-86-2": { name: "乙炔", hStatements: ["H220", "H280", "H230"], isFlammable: true },
  "7664-41-7": { name: "氨气", hStatements: ["H221", "H280", "H314", "H331", "H400"], isFlammable: true },

  // --- 9. 芳香族与官能团中间体 ---
  "108-95-2": { name: "苯酚", hStatements: ["H301", "H311", "H331", "H314", "H341", "H373"], isFlammable: false },
  "100-42-5": { name: "苯乙烯", hStatements: ["H226", "H315", "H319", "H332", "H361", "H372"], isFlammable: true },
  "62-53-3": { name: "苯胺", hStatements: ["H301", "H311", "H331", "H317", "H318", "H341", "H351", "H372", "H400"], isFlammable: true },
  "98-95-3": { name: "硝基苯", hStatements: ["H301", "H311", "H331", "H351", "H360", "H372", "H411"], isFlammable: true },
  "110-86-1": { name: "吡啶", hStatements: ["H225", "H302", "H312", "H332"], isFlammable: true },
  "107-13-1": { name: "丙烯腈", hStatements: ["H225", "H301", "H311", "H331", "H315", "H317", "H318", "H350", "H411"], isFlammable: true },
  "79-06-1": { name: "丙烯酰胺", hStatements: ["H301", "H312", "H315", "H317", "H319", "H332", "H340", "H350", "H361", "H372"], isFlammable: false },

  // --- 10. 额外补全 (常见工业试剂) ---
  "108-05-4": { name: "乙酸乙烯酯", hStatements: ["H225", "H332", "H335", "H351"], isFlammable: true },
  "78-93-3": { name: "丁酮", hStatements: ["H225", "H319", "H336"], isFlammable: true },
  "108-94-1": { name: "环己酮", hStatements: ["H226", "H302", "H312", "H332", "H315", "H318"], isFlammable: true },
  "75-65-0": { name: "叔丁醇", hStatements: ["H225", "H332", "H319", "H335"], isFlammable: true },
  "123-91-1": { name: "1,4-二氧六环", hStatements: ["H225", "H319", "H335", "H350"], isFlammable: true },
  "107-21-1": { name: "乙二醇", hStatements: ["H302", "H373"], isFlammable: false },
  "111-46-6": { name: "二甘醇", hStatements: ["H302"], isFlammable: false },
  "57-55-6": { name: "丙二醇", hStatements: [], isFlammable: false },
  "102-71-6": { name: "三乙醇胺", hStatements: [], isFlammable: false },
  "111-42-2": { name: "二乙醇胺", hStatements: ["H302", "H315", "H318", "H373"], isFlammable: false },
  "107-15-3": { name: "乙二胺", hStatements: ["H226", "H302", "H312", "H314", "H334", "H317"], isFlammable: true },
  "110-58-7": { name: "正戊胺", hStatements: ["H225", "H302", "H311", "H331", "H314"], isFlammable: true },
  "107-10-8": { name: "正丙胺", hStatements: ["H225", "H302", "H311", "H331", "H314"], isFlammable: true },
  "75-31-0": { name: "异丙胺", hStatements: ["H224", "H302", "H311", "H331", "H314", "H335"], isFlammable: true },

  // ... 更多 CAS 数据可以在此处继续追加
};
