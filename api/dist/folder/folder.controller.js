"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderController = void 0;
const common_1 = require("@nestjs/common");
const folder_service_1 = require("./folder.service");
const create_folder_dto_1 = require("./dto/create-folder.dto");
let FolderController = class FolderController {
    constructor(folderService) {
        this.folderService = folderService;
    }
    create(body) {
        return this.folderService.create(body);
    }
    getAll() {
        return this.folderService.getAll();
    }
    findOne(id) {
        return this.folderService.findOne(+id);
    }
    update(id, body) {
        return this.folderService.update(+id, body);
    }
    remove(id) {
        return this.folderService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_folder_dto_1.CreateFolderDto]),
    __metadata("design:returntype", void 0)
], FolderController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FolderController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FolderController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_folder_dto_1.CreateFolderDto]),
    __metadata("design:returntype", void 0)
], FolderController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FolderController.prototype, "remove", null);
FolderController = __decorate([
    (0, common_1.Controller)('folder'),
    __metadata("design:paramtypes", [folder_service_1.FolderService])
], FolderController);
exports.FolderController = FolderController;
//# sourceMappingURL=folder.controller.js.map