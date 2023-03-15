describe("index.js", () => {
  describe("defines saturdayFun function declaration as specified", function() {
    it("function exists", function() {
      expect(saturdayFun).to.exist
    })

    it("uses the default activity 'roller-skate' when no arguments are passed", function() {
      expect(saturdayFun()).to.equal("This Saturday, I want to roller-skate!")
    })

    it("permits the default activity to be overriden", function() {
      expect(saturdayFun("bathe my dog")).to.equal("This Saturday, I want to bathe my dog!")
    })
  })

  describe("defines mondayWork function expression as specified", function() {
    it("function exists", function() {
      expect(mondayWork).to.exist
    })

    it("uses the default activity 'go to the office' when no arguments are passed", function() {
      expect(mondayWork()).to.equal("This Monday, I will go to the office.")
    })

    it("permits the default activity to be overriden", function() {
      expect(mondayWork("work from home")).to.equal("This Monday, I will work from home.")
    })
  })

  describe("defines wrapAdjective function according to the specification", function() {
    it("function exists", function() {
      expect(wrapAdjective).to.exist
    })
    
    
function saturdayFun(activity = 'roller-skate'){

  return `This Saturday, I want to ${activity}!`
  }
  
  function mondayWork(activity= 'go to the office'){
  
      return `This Monday, I will ${activity}.`
  }
  
  
  function wrapAdjective(symbol='*'){
  
     return function(emphatic ='special'){
  
          return `You are ${symbol}${emphatic}${symbol}!`
      }
     
  }
  
      
  
  wrapAdjective("||")("a dedicated programmer")("||")