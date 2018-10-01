describe ('Fizzbuzz', function(){
  var fb;

  beforeEach(function() {
    fb = new Fizzbuzz();
  });

  describe ('divisible by 3', function(){
    it("should return fizz when 3 is passed", function() {
      expect(fb.fizzbuzz(3)).toEqual('fizz');
    });

    it("should return fizz when 6 is passed", function() {
      expect(fb.fizzbuzz(6)).toEqual('fizz');
    });
  });

  describe ('divisble by 5', function() {
    it("should return buzz when 5 is passed", function(){
      expect(fb.fizzbuzz(5)).toEqual('buzz');
    });

    it('should return buzz when 10 is passed', function() {
      expect(fb.fizzbuzz(10)).toEqual('buzz');
    })
  })

 describe ('divisble by 3 and 5 (15)', function() {
   it("should return fizzbuzz when 15 is passed", function(){
     expect(fb.fizzbuzz(15)).toEqual('fizzbuzz');
   });

   it("should return fizzbuzz when 30 is passed", function() {
     expect(fb.fizzbuzz(30)).toEqual('fizzbuzz');
   })
 })

describe ('not divisble by 3, 5, or 15', function() {
  it("should return 1 when passed 1", function() {
    expect(fb.fizzbuzz(1)).toEqual(1);

  });
  it ("should return 11 when passed 11", function() {
    expect(fb.fizzbuzz(11)).toEqual(11);
  })
})
});
