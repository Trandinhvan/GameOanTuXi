const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/keo.png', datCuoc: false }, //thằng nào có gt bằng true thì nó sẽ hiện lên khung theThink
        { ma: 'bua', hinhAnh: './img/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/bao.png', datCuoc: true }
    ],
    ketQua: "I'm Iron Man, I love u 3000!!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './img/keo.png', datCuoc: false }
}

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            //reset mảng cược
            let mangCuocUpdate = [...state.mangDatCuoc];
            //Tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc do người dùng truyền lên
            //sau đó so sánh xem cái mã của cái bao hay bua hay kéo trùng vs cái mã đc onclick bên button thì cho bằng true để nó hiện trên theThink
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            //set state của mangCuoc => render lại giao diện.
            state.mangDatCuoc = mangCuocUpdate;
            return { ...state }
        }
            break;

        case 'RAN_DOM': {
            let soNgauNhien = Math.floor(Math.random() * 3); // random 1-> 3 vì có 3 loại.
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien]; //cho loại ngẫu nhiên = object loại trong mảng đặt cược
            state.computer = quanCuocNgauNhien; // gán computer = obj đó.
            return { ...state }
            //phải trả về state mới.
        }
            break;
        case 'END_GAME': {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;
            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Hòa'
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Thua'
                    } else {
                        state.ketQua = "Im'm Iron man, Love u 3000!!!"
                        state.soBanThang +=1;
                    }
                    state.soBanChoi +=1;
                    break;
                case 'bua':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Im Iron man, Love u 3000!!!'
                        state.soBanThang +=1;
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Hòa'
                    } else {
                        state.ketQua = "Thua"
                    }
                    state.soBanChoi +=1;

                    break;
                case 'bao':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Thua'
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Im Iron man, Love u 3000!!!'
                        state.soBanThang +=1;
                    } else {
                        state.ketQua = "Hòa"
                    }
                    state.soBanChoi +=1;
                    break;
                default: state.ketQua = 'Im Iron man, Love u 3000!!!'
                break;
            }
        }

        return {...state}
        default: return { ...state }
    }
}
export default BaiTapOanTuXiReducer;