const {test}=QUnit;


QUnit.module("FizBuz",function(){

test ("fizzbuzz függvény létezik-e", function (assert) {
    assert.ok(fizbuz, "Létezik");
})

test ("fizzbuzz függvény létezik-e", function (assert) {
    assert.ok(typeof fizbuz==="function", "Függvény");
})

test ('0 hosszú sorozat', function (assert) {
    assert.equal(fizbuz(0), '');
})

test ('1 hosszú sorozat', function (assert) {
        assert.equal(fizbuzErtek(1), '1');
    })

test ('2 hosszú sorozat', function (assert) {
    assert.equal(fizbuzErtek(2), '2');
})

test ('3 hosszú sorozat', function (assert) {
    assert.equal(fizbuz(3), '');
})

test ('4 hosszú sorozat', function (assert) {
    assert.equal(fizbuz(3), '1,2,fiz,4');
})

test ('5 hosszú sorozat', function (assert) {
    assert.equal(fizbuz(3), '1,2,fiz,4,buz');
})

test ('6 hosszú sorozat', function (assert) {
    assert.equal(fizbuz(3), '1,2,fiz,4,buz,fiz');
})

})