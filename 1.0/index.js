/**
 * @fileoverview 
 * @author 拔赤<bachi@taobao.com>
 * @module cutter
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class Cutter
     * @constructor
     * @extends Base
     */
    function Cutter(comConfig) {
        var self = this;
        //调用父类构造函数
        Cutter.superclass.constructor.call(self, comConfig);
    }
    S.extend(Cutter, Base, /** @lends Cutter.prototype*/{

    }, {ATTRS : /** @lends Cutter*/{

    }});
    return Cutter;
}, {requires:['node', 'base']});



