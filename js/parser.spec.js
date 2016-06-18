(function() {
    describe('parser', function() {
        describe('leftpad.io', function() {
            it('pads properly', function() {
                expect("2".leftpadio("0", 2)).toEqual('02');
                expect("02".leftpadio("0", 2)).toEqual('02');
                expect("200".leftpadio("0", 2)).toEqual('200');
            });
        });

        describe('toHHMM', function() {
            it('converts properly', function() {
                expect('1615'.toHHMM()).toEqual('00h 27m')  // 0:26:55
                expect('3344'.toHHMM()).toEqual('00h 56m')  // 0:55:44
                expect('6445'.toHHMM()).toEqual('01h 47m')  // 1:47:25
                expect('46045'.toHHMM()).toEqual('12h 47m')  // 12:47:25
            });

            it('rounds seconds', function() {
                expect('1'.toHHMM()).toEqual('00h 00m');
                expect('29'.toHHMM()).toEqual('00h 00m');
                expect('30'.toHHMM()).toEqual('00h 01m');
            });
        });
    });
})();
