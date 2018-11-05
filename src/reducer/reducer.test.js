import reducer from './reducer'

describe('ciao Jest', () => {
  it('initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      score: 0,
      bonus: 0,
      itemTypes: []
    })
  })

  it('ITEM-CLICKED', () => {
    const state = {
      score: 0,
      bonus: 0,
      itemTypes: []
    };
    const action = {
      bonus: 50,
      bonusOn: 3,
      name: "A",
      points: 50,
      type: "ITEM-CLICKED"
    };

    expect(reducer(state, action)).toEqual({
      score: 50,
      bonus: 0,
      itemTypes: [{ ...action, count: 1 }]
    })
  })

  it('bonus-A', () => {
    const state = {
      score: 100,
      bonus: 0,
      itemTypes: [{
        bonus: 50,
        bonusOn: 3,
        name: "A",
        points: 100,
        count: 2,
        type: "ITEM-CLICKED"
      }]
    };

    const action = {
      bonus: 50,
      bonusOn: 3,
      name: "A",
      points: 50,
      type: "ITEM-CLICKED"
    };

    expect(reducer(state, action)).toEqual({
      score: 200,
      bonus: 50,
      itemTypes: [{
        bonus: 50,
        bonusOn: 3,
        name: "A",
        points: 200,
        count: 3,
        type: "ITEM-CLICKED"
      }]
    })
  })

  it('bonus-B', () => {
    const state = {
      score: 30,
      bonus: 0,
      itemTypes: [{
        bonus: 30,
        bonusOn: 2,
        name: "B",
        points: 30,
        count: 1,
        type: "ITEM-CLICKED"
      }]
    };

    const action = {
      bonus: 30,
      bonusOn: 2,
      name: "B",
      points: 30,
      type: "ITEM-CLICKED"
    };

    expect(reducer(state, action)).toEqual({
      score: 90,
      bonus: 30,
      itemTypes: [{
        bonus: 30,
        bonusOn: 2,
        name: "B",
        points: 90,
        count: 2,
        type: "ITEM-CLICKED"
      }]
    })
  })

  it('reset', () => {
    const state = {
      score: 90,
      bonus: 30,
      itemTypes: [{
        bonus: 30,
        bonusOn: 2,
        name: "B",
        points: 30,
        count: 2,
        type: "ITEM-CLICKED"
      }]
    };
    const action = { type: "RESET" };

    expect(reducer(state, action)).toEqual({
      score: 0,
      bonus: 0,
      itemTypes: []
    })
  })

})