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
    var Enemy_bullet_Laser_lv1 = /** @class */ (function (_super) {
        __extends(Enemy_bullet_Laser_lv1, _super);
        /**
         *
         * @memberof Enemy_bullet_Laser_lv1;
         */
        function Enemy_bullet_Laser_lv1() {
            var _this = _super.call(this, "enemy_bullet_laser_lv1") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Enemy_bullet_Laser_lv1.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this._horizontalSpeed = 10;
            this.x = 0;
            this.y = 0;
        };
        Enemy_bullet_Laser_lv1.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
        };
        Enemy_bullet_Laser_lv1.prototype.Reset = function () {
        };
        return Enemy_bullet_Laser_lv1;
    }(objects.GameObject));
    objects.Enemy_bullet_Laser_lv1 = Enemy_bullet_Laser_lv1;
})(objects || (objects = {}));
//# sourceMappingURL=enemy_bullet_Laser_lv1.js.map