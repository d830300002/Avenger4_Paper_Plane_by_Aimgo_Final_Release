var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Enemy_bullet_Laser_lv2 = /** @class */ (function (_super) {
        __extends(Enemy_bullet_Laser_lv2, _super);
        /**
         *
         * @memberof Enemy_bullet_Laser_lv2;
         */
        function Enemy_bullet_Laser_lv2() {
            var _this = _super.call(this, "enemy_bullet_laser_lv2") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Enemy_bullet_Laser_lv2.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._horizontalSpeed = 10;
            this.x = 0;
            this.y = 0;
        };
        Enemy_bullet_Laser_lv2.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
        };
        Enemy_bullet_Laser_lv2.prototype.Reset = function () {
        };
        return Enemy_bullet_Laser_lv2;
    }(objects.GameObject));
    objects.Enemy_bullet_Laser_lv2 = Enemy_bullet_Laser_lv2;
})(objects || (objects = {}));
//# sourceMappingURL=emey_bullet_Laser_lv2.js.map