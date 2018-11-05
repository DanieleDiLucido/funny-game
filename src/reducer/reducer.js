const initialState = {
  score: 0,
  bonus: 0,
  itemTypes: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ITEM-CLICKED': {

      let itemTypes = [...state.itemTypes];
      let bonus = state.bonus;
      let item = state.itemTypes.filter(el => el.name === action.name)[0];
      if (item) {
        item.count += + 1;
        item.points += action.points;
        if (item.count % action.bonusOn === 0) {
          item.points += action.bonus
          bonus += action.bonus
        }
      } else {
        itemTypes.push({ ...action, count: 1 });
      }

      return {
        itemTypes,
        bonus,
        score: itemTypes.reduce((sum, el) => {
          return sum + el.points;
        }, 0)
      }
    }
    case 'RESET': {
      return initialState
    }
    default:
      return state
  }
}