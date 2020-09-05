export interface IFormItem {
  type: string;
  field: string;
  placeholder?: string;
  items: { field: string; value: string }[];
  key: string;
}

export default [
  {
    title: '이름과 함께\n널리에서 사용할\n아이디를\n정해주세요.',
    description: '여러분을 불러드릴 수 있게요.',
    image: require('../../assets/illusts/nout.png'),
    imageStyle: {
      width: 259,
      height: 209,
      right: -90,
      bottom: 7,
    },
    forms: [
      { type: 'text', field: '이름', placeholder: '실명을 입력해 주세요.', key: 'name' },
      { type: 'text', field: '아이디', placeholder: '6~12자 영문, 숫자로 입력해 주세요.', key: 'username' },
    ]
  },
  {
    title: '아무도 모르는\n안전한\n패스워드를\n설정해 주세요.',
    description: '친구와 가족도 모르는 비밀이죠.',
    isAlignedRight: true,
    image: require('../../assets/illusts/lock.png'),
    imageStyle: {
      width: 242,
      height: 184,
      left: 33,
      bottom: 27,
    },
    forms: [
      { type: 'text', field: '패스워드', placeholder: '6~12자 영문, 특문 및 숫자로 입력해 주세요.' },
      { type: 'text', field: '패스워드 확인', placeholder: '위에서 입력한 패스워드를 재입력해 주세요.' },
    ]
  },
  {
    title: '생년월일을\n입력하고,\n이용약관을\n확인해요.',
    description: '축하해요!\n드디어 마지막 단계랍니다.',
    image: require('../../assets/illusts/checkmark.png'),
    imageStyle: {
      width: 268,
      height: 183,
      right: -88,
      bottom: 44,
    },
    forms: [
      { type: 'text', field: '생년월일 8자리', placeholder: '8자리로 입력해 주세요. ex)19881213' },
      {
        type: 'select',
        field: '성별',
        items: [
          { field: '여성', value: 'f' },
          { field: '남성', value: 'm' },
        ],
      },
    ]
  }
]
