System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, systemEvent, SystemEventType, macro, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Move;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      systemEvent = _cc.systemEvent;
      SystemEventType = _cc.SystemEventType;
      macro = _cc.macro;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "33040dhKipGRK5ihGsSPgl/", "move", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Move", Move = (_dec = ccclass('Move'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Move, _Component);

        function Move() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "man", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "woman", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "LIMIT_TOP", 260);

          _defineProperty(_assertThisInitialized(_this), "LIMIT_BOTTOM", -260);

          _defineProperty(_assertThisInitialized(_this), "LIMIT_LEFT", -200);

          _defineProperty(_assertThisInitialized(_this), "LIMIT_RIGHT", 200);

          return _this;
        }

        var _proto = Move.prototype;

        _proto.onLoad = function onLoad() {
          systemEvent.on(SystemEventType.KEY_DOWN, this.onKeyDown, this);
          systemEvent.on(SystemEventType.KEY_UP, this.onKeyUp, this);
        };

        _proto.onDestroy = function onDestroy() {
          systemEvent.off(SystemEventType.KEY_DOWN, this.onKeyDown, this);
          systemEvent.off(SystemEventType.KEY_UP, this.onKeyUp, this);
        };

        _proto.onKeyDown = function onKeyDown(event) {};

        _proto.onKeyUp = function onKeyUp(event) {
          var posMan = this.man.getPosition();
          var posWoman = this.woman.getPosition();

          switch (event.keyCode) {
            case macro.KEY.a:
              this.man.setPosition(posMan.x - 10, posMan.y, posMan.z);
              this.fixPosition(this.man, 0);
              break;

            case macro.KEY.d:
              this.man.setPosition(posMan.x + 10, posMan.y, posMan.z);
              this.fixPosition(this.man, 1);
              break;

            case macro.KEY.w:
              this.man.setPosition(posMan.x, posMan.y + 10, posMan.z);
              this.fixPosition(this.man, 2);
              break;

            case macro.KEY.s:
              this.man.setPosition(posMan.x, posMan.y - 10, posMan.z);
              this.fixPosition(this.man, 3);
              break;

            case macro.KEY.left:
              this.woman.setPosition(posWoman.x - 10, posWoman.y, posWoman.z);
              this.fixPosition(this.woman, 0);
              break;

            case macro.KEY.right:
              this.woman.setPosition(posWoman.x + 10, posWoman.y, posWoman.z);
              this.fixPosition(this.woman, 1);
              break;

            case macro.KEY.up:
              this.woman.setPosition(posWoman.x, posWoman.y + 10, posWoman.z);
              this.fixPosition(this.woman, 2);
              break;

            case macro.KEY.down:
              this.woman.setPosition(posWoman.x, posWoman.y - 10, posWoman.z);
              this.fixPosition(this.woman, 3);
              break;
          }
        };

        _proto.fixPosition = function fixPosition(player, direct) {
          var pos = player.getPosition();

          switch (direct) {
            case 0:
              if (pos.x <= this.LIMIT_LEFT) pos.x = this.LIMIT_LEFT;
              break;

            case 1:
              if (pos.x >= this.LIMIT_RIGHT) pos.x = this.LIMIT_RIGHT;
              break;

            case 2:
              if (pos.y >= this.LIMIT_TOP) pos.y = this.LIMIT_TOP;
              break;

            case 3:
              if (pos.y <= this.LIMIT_BOTTOM) pos.y = this.LIMIT_BOTTOM;
              break;
          }

          player.setPosition(pos);
        };

        return Move;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "man", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "woman", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=move.js.map