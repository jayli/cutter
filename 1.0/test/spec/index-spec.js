KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('cutter', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','gallery/cutter/1.0/']});