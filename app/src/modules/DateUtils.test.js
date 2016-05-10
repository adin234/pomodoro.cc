import DateUtils from './DateUtils'

describe('DateUtils', function () {
  describe('#before', function () {
    it('returns the day before a date', function () {
      expect( DateUtils.before('2016/01/02') ).to.eql( '2016/01/01' )
      expect( DateUtils.before('2016/01/02') ).to.eql( '2016/01/01' )
      expect( DateUtils.before(new Date('2016/01/01')) ).to.eql( '2015/12/31' )
    })
  })
})
