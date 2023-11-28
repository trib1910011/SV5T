import xlsx from "xlsx";
import Account from "../../models/Account.js";
import StudentAccount from "../../models/StudentAccount.js";

const importExcel = async (req, res) => {
  try {
    let xlFile = xlsx.readFile("D:\\SV5T\\Account.xlsx");
    let sheet = xlFile.Sheets[xlFile.SheetNames[0]];
    let P_JSON = xlsx.utils.sheet_to_json(sheet);
    await Account.insertMany(P_JSON).then((result) => {
      if (result.length > 0) {
        const data_account = result;
        const arr_id = data_account.map(async (item, index) => {
          return await StudentAccount.create({
            
            studentId: item._id,
            classStudent: P_JSON[index].classStudent,
            major: P_JSON[index].major,
            course: P_JSON[index].course
          });
        });
        if (arr_id) res.json({
          status: true,
          message: "Tải file excel thành công!",
          arr_id,
      });
      } 
      else {
        res.send("Fail");
      }
    });
  } catch (e) {
    res.send(e);
  }
};
export default importExcel;
