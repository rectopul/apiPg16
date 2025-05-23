(function() {
    var a, b, c, d, e, f, g, h, i, j = [].slice,
        k = function(a, b) {
            function c() { this.constructor = a }
            for (var d in b) l.call(b, d) && (a[d] = b[d]);
            return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
        },
        l = {}.hasOwnProperty;
    h = function() {}, b = function() {
        function a() {}
        return a.prototype.addEventListener = a.prototype.on, a.prototype.on = function(a, b) { return this._callbacks = this._callbacks || {}, this._callbacks[a] || (this._callbacks[a] = []), this._callbacks[a].push(b), this }, a.prototype.emit = function() {
            var a, b, c, d, e, f;
            if (d = arguments[0], a = 2 <= arguments.length ? j.call(arguments, 1) : [], this._callbacks = this._callbacks || {}, c = this._callbacks[d])
                for (e = 0, f = c.length; e < f; e++) b = c[e], b.apply(this, a);
            return this
        }, a.prototype.removeListener = a.prototype.off, a.prototype.removeAllListeners = a.prototype.off, a.prototype.removeEventListener = a.prototype.off, a.prototype.off = function(a, b) {
            var c, d, e, f, g;
            if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this;
            if (d = this._callbacks[a], !d) return this;
            if (1 === arguments.length) return delete this._callbacks[a], this;
            for (e = f = 0, g = d.length; f < g; e = ++f)
                if (c = d[e], c === b) { d.splice(e, 1); break }
            return this
        }, a
    }(), a = function(a) {
        function d(a, b) {
            var c, f, g;
            if (this.element = a, this.version = d.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), !this.element || null == this.element.nodeType) throw new Error("Invalid dropzone element.");
            if (this.element.dropzone) throw new Error("Dropzone already attached.");
            if (d.instances.push(this), this.element.dropzone = this, c = null != (g = d.optionsForElement(this.element)) ? g : {}, this.options = e({}, this.defaultOptions, c, null != b ? b : {}), this.options.forceFallback || !d.isBrowserSupported()) return this.options.fallback.call(this);
            if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), !this.options.url) throw new Error("No URL provided.");
            if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
            this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, delete this.options.acceptedMimeTypes), null != this.options.renameFilename && (this.options.renameFile = function(a) { return function(b) { return a.options.renameFilename.call(a, b.name, b) } }(this)), this.options.method = this.options.method.toUpperCase(), (f = this.getExistingFallback()) && f.parentNode && f.parentNode.removeChild(f), this.options.previewsContainer !== !1 && (this.options.previewsContainer ? this.previewsContainer = d.getElement(this.options.previewsContainer, "previewsContainer") : this.previewsContainer = this.element), this.options.clickable && (this.options.clickable === !0 ? this.clickableElements = [this.element] : this.clickableElements = d.getElements(this.options.clickable, "clickable")), this.init()
        }
        var e, f;
        return k(d, a), d.prototype.Emitter = b, d.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], d.prototype.defaultOptions = {
            url: null,
            method: "post",
            withCredentials: !1,
            timeout: 3e4,
            parallelUploads: 2,
            uploadMultiple: !1,
            maxFilesize: 256,
            paramName: "file",
            createImageThumbnails: !0,
            maxThumbnailFilesize: 10,
            thumbnailWidth: 120,
            thumbnailHeight: 120,
            thumbnailMethod: "crop",
            resizeWidth: null,
            resizeHeight: null,
            resizeMimeType: null,
            resizeQuality: .8,
            resizeMethod: "contain",
            filesizeBase: 1e3,
            maxFiles: null,
            params: {},
            headers: null,
            clickable: !0,
            ignoreHiddenFiles: !0,
            acceptedFiles: null,
            acceptedMimeTypes: null,
            autoProcessQueue: !0,
            autoQueue: !0,
            addRemoveLinks: !1,
            previewsContainer: null,
            hiddenInputContainer: "body",
            capture: null,
            renameFilename: null,
            renameFile: null,
            forceFallback: !1,
            dictDefaultMessage: "Solte os arquivos aqui para enviar",
            dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
            dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
            dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
            dictInvalidFileType: "VocÃª nÃ£o pode fazer upload de arquivos deste tipo.",
            dictResponseError: "Server responded with {{statusCode}} code.",
            dictCancelUpload: "Cancel upload",
            dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
            dictRemoveFile: "Remove file",
            dictRemoveFileConfirmation: null,
            dictMaxFilesExceeded: "You can not upload any more files.",
            dictFileSizeUnits: { tb: "TB", gb: "GB", mb: "MB", kb: "KB", b: "b" },
            init: function() { return h },
            accept: function(a, b) { return b() },
            fallback: function() { var a, b, c, e, f, g; for (this.element.className = this.element.className + " dz-browser-not-supported", f = this.element.getElementsByTagName("div"), b = 0, c = f.length; b < c; b++) a = f[b], /(^| )dz-message($| )/.test(a.className) && (e = a, a.className = "dz-message"); return e || (e = d.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(e)), g = e.getElementsByTagName("span")[0], g && (null != g.textContent ? g.textContent = this.options.dictFallbackMessage : null != g.innerText && (g.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm()) },
            resize: function(a, b, c, d) {
                var e, f, g;
                if (e = { srcX: 0, srcY: 0, srcWidth: a.width, srcHeight: a.height }, f = a.width / a.height, null == b && null == c ? (b = e.srcWidth, c = e.srcHeight) : null == b ? b = c * f : null == c && (c = b / f), b = Math.min(b, e.srcWidth), c = Math.min(c, e.srcHeight), g = b / c, e.srcWidth > b || e.srcHeight > c)
                    if ("crop" === d) f > g ? (e.srcHeight = a.height, e.srcWidth = e.srcHeight * g) : (e.srcWidth = a.width, e.srcHeight = e.srcWidth / g);
                    else {
                        if ("contain" !== d) throw new Error("Unknown resizeMethod '" + d + "'");
                        f > g ? c = b / f : b = c * f
                    }
                return e.srcX = (a.width - e.srcWidth) / 2, e.srcY = (a.height - e.srcHeight) / 2, e.trgWidth = b, e.trgHeight = c, e
            },
            transformFile: function(a, b) { return (this.options.resizeWidth || this.options.resizeHeight) && a.type.match(/image.*/) ? this.resizeImage(a, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, b) : b(a) },
            previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
            drop: function(a) { return this.element.classList.remove("dz-drag-hover") },
            dragstart: h,
            dragend: function(a) { return this.element.classList.remove("dz-drag-hover") },
            dragenter: function(a) { return this.element.classList.add("dz-drag-hover") },
            dragover: function(a) { return this.element.classList.add("dz-drag-hover") },
            dragleave: function(a) { return this.element.classList.remove("dz-drag-hover") },
            paste: h,
            reset: function() { return this.element.classList.remove("dz-started") },
            addedfile: function(a) { var b, c, e, f, g, h, i, j, k, l, m, n, o; if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) { for (a.previewElement = d.createElement(this.options.previewTemplate.trim()), a.previewTemplate = a.previewElement, this.previewsContainer.appendChild(a.previewElement), j = a.previewElement.querySelectorAll("[data-dz-name]"), b = 0, f = j.length; b < f; b++) i = j[b], i.textContent = a.name; for (k = a.previewElement.querySelectorAll("[data-dz-size]"), c = 0, g = k.length; c < g; c++) i = k[c], i.innerHTML = this.filesize(a.size); for (this.options.addRemoveLinks && (a._removeLink = d.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), a.previewElement.appendChild(a._removeLink)), m = function(b) { return function(c) { return c.preventDefault(), c.stopPropagation(), a.status === d.UPLOADING ? d.confirm(b.options.dictCancelUploadConfirmation, function() { return b.removeFile(a) }) : b.options.dictRemoveFileConfirmation ? d.confirm(b.options.dictRemoveFileConfirmation, function() { return b.removeFile(a) }) : b.removeFile(a) } }(this), l = a.previewElement.querySelectorAll("[data-dz-remove]"), o = [], e = 0, h = l.length; e < h; e++) n = l[e], o.push(n.addEventListener("click", m)); return o } },
            removedfile: function(a) { var b; return a.previewElement && null != (b = a.previewElement) && b.parentNode.removeChild(a.previewElement), this._updateMaxFilesReachedClass() },
            thumbnail: function(a, b) { var c, d, e, f; if (a.previewElement) { for (a.previewElement.classList.remove("dz-file-preview"), e = a.previewElement.querySelectorAll("[data-dz-thumbnail]"), c = 0, d = e.length; c < d; c++) f = e[c], f.alt = a.name, f.src = b; return setTimeout(function(b) { return function() { return a.previewElement.classList.add("dz-image-preview") } }(this), 1) } },
            error: function(a, b) { var c, d, e, f, g; if (a.previewElement) { for (a.previewElement.classList.add("dz-error"), "String" != typeof b && b.error && (b = b.error), f = a.previewElement.querySelectorAll("[data-dz-errormessage]"), g = [], c = 0, d = f.length; c < d; c++) e = f[c], g.push(e.textContent = b); return g } },
            errormultiple: h,
            processing: function(a) { if (a.previewElement && (a.previewElement.classList.add("dz-processing"), a._removeLink)) return a._removeLink.textContent = this.options.dictCancelUpload },
            processingmultiple: h,
            uploadprogress: function(a, b, c) { var d, e, f, g, h; if (a.previewElement) { for (g = a.previewElement.querySelectorAll("[data-dz-uploadprogress]"), h = [], d = 0, e = g.length; d < e; d++) f = g[d], "PROGRESS" === f.nodeName ? h.push(f.value = b) : h.push(f.style.width = b + "%"); return h } },
            totaluploadprogress: h,
            sending: h,
            sendingmultiple: h,
            success: function(a) { if (a.previewElement) return a.previewElement.classList.add("dz-success") },
            successmultiple: h,
            canceled: function(a) { return this.emit("error", a, "Upload canceled.") },
            canceledmultiple: h,
            complete: function(a) { if (a._removeLink && (a._removeLink.textContent = this.options.dictRemoveFile), a.previewElement) return a.previewElement.classList.add("dz-complete") },
            completemultiple: h,
            maxfilesexceeded: h,
            maxfilesreached: h,
            queuecomplete: h,
            addedfiles: h
        }, e = function() { var a, b, c, d, e, f, g; for (f = arguments[0], e = 2 <= arguments.length ? j.call(arguments, 1) : [], a = 0, c = e.length; a < c; a++) { d = e[a]; for (b in d) g = d[b], f[b] = g } return f }, d.prototype.getAcceptedFiles = function() { var a, b, c, d, e; for (d = this.files, e = [], b = 0, c = d.length; b < c; b++) a = d[b], a.accepted && e.push(a); return e }, d.prototype.getRejectedFiles = function() { var a, b, c, d, e; for (d = this.files, e = [], b = 0, c = d.length; b < c; b++) a = d[b], a.accepted || e.push(a); return e }, d.prototype.getFilesWithStatus = function(a) { var b, c, d, e, f; for (e = this.files, f = [], c = 0, d = e.length; c < d; c++) b = e[c], b.status === a && f.push(b); return f }, d.prototype.getQueuedFiles = function() { return this.getFilesWithStatus(d.QUEUED) }, d.prototype.getUploadingFiles = function() { return this.getFilesWithStatus(d.UPLOADING) }, d.prototype.getAddedFiles = function() { return this.getFilesWithStatus(d.ADDED) }, d.prototype.getActiveFiles = function() { var a, b, c, e, f; for (e = this.files, f = [], b = 0, c = e.length; b < c; b++) a = e[b], a.status !== d.UPLOADING && a.status !== d.QUEUED || f.push(a); return f }, d.prototype.init = function() {
            var a, b, c, e, f, g, h;
            for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(d.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length && (h = function(a) {
                    return function() {
                        return a.hiddenFileInput && a.hiddenFileInput.parentNode.removeChild(a.hiddenFileInput), a.hiddenFileInput = document.createElement("input"), a.hiddenFileInput.setAttribute("type", "file"), (null == a.options.maxFiles || a.options.maxFiles > 1) && a.hiddenFileInput.setAttribute("multiple", "multiple"), a.hiddenFileInput.className = "dz-hidden-input", null != a.options.acceptedFiles && a.hiddenFileInput.setAttribute("accept", a.options.acceptedFiles), null != a.options.capture && a.hiddenFileInput.setAttribute("capture", a.options.capture), a.hiddenFileInput.style.visibility = "hidden", a.hiddenFileInput.style.position = "absolute", a.hiddenFileInput.style.top = "0", a.hiddenFileInput.style.left = "0", a.hiddenFileInput.style.height = "0", a.hiddenFileInput.style.width = "0", document.querySelector(a.options.hiddenInputContainer).appendChild(a.hiddenFileInput), a.hiddenFileInput.addEventListener("change", function() {
                            var b, c, d, e;
                            if (c = a.hiddenFileInput.files, c.length)
                                for (d = 0, e = c.length; d < e; d++) b = c[d], a.addFile(b);
                            return a.emit("addedfiles", c), h()
                        })
                    }
                }(this))(), this.URL = null != (f = window.URL) ? f : window.webkitURL, g = this.events, b = 0, c = g.length; b < c; b++) a = g[b], this.on(a, this.options[a]);
            return this.on("uploadprogress", function(a) { return function() { return a.updateTotalUploadProgress() } }(this)), this.on("removedfile", function(a) { return function() { return a.updateTotalUploadProgress() } }(this)), this.on("canceled", function(a) { return function(b) { return a.emit("complete", b) } }(this)), this.on("complete", function(a) { return function(b) { if (0 === a.getAddedFiles().length && 0 === a.getUploadingFiles().length && 0 === a.getQueuedFiles().length) return setTimeout(function() { return a.emit("queuecomplete") }, 0) } }(this)), e = function(a) { return a.stopPropagation(), a.preventDefault ? a.preventDefault() : a.returnValue = !1 }, this.listeners = [{ element: this.element, events: { dragstart: function(a) { return function(b) { return a.emit("dragstart", b) } }(this), dragenter: function(a) { return function(b) { return e(b), a.emit("dragenter", b) } }(this), dragover: function(a) { return function(b) { var c; try { c = b.dataTransfer.effectAllowed } catch (a) {} return b.dataTransfer.dropEffect = "move" === c || "linkMove" === c ? "move" : "copy", e(b), a.emit("dragover", b) } }(this), dragleave: function(a) { return function(b) { return a.emit("dragleave", b) } }(this), drop: function(a) { return function(b) { return e(b), a.drop(b) } }(this), dragend: function(a) { return function(b) { return a.emit("dragend", b) } }(this) } }], this.clickableElements.forEach(function(a) { return function(b) { return a.listeners.push({ element: b, events: { click: function(c) { return (b !== a.element || c.target === a.element || d.elementInside(c.target, a.element.querySelector(".dz-message"))) && a.hiddenFileInput.click(), !0 } } }) } }(this)), this.enable(), this.options.init.call(this)
        }, d.prototype.destroy = function() { var a; return this.disable(), this.removeAllFiles(!0), (null != (a = this.hiddenFileInput) ? a.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, d.instances.splice(d.instances.indexOf(this), 1) }, d.prototype.updateTotalUploadProgress = function() {
            var a, b, c, d, e, f, g, h;
            if (g = 0, f = 0, a = this.getActiveFiles(), a.length) {
                for (e = this.getActiveFiles(), c = 0, d = e.length; c < d; c++) b = e[c], g += b.upload.bytesSent, f += b.upload.total;
                h = 100 * g / f
            } else h = 100;
            return this.emit("totaluploadprogress", h, f, g)
        }, d.prototype._getParamName = function(a) { return "function" == typeof this.options.paramName ? this.options.paramName(a) : "" + this.options.paramName + (this.options.uploadMultiple ? "[" + a + "]" : "") }, d.prototype._renameFile = function(a) { return "function" != typeof this.options.renameFile ? a.name : this.options.renameFile(a) }, d.prototype.getFallbackForm = function() { var a, b, c, e; return (a = this.getExistingFallback()) ? a : (c = '<div class="dz-fallback">', this.options.dictFallbackText && (c += "<p>" + this.options.dictFallbackText + "</p>"), c += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', b = d.createElement(c), "FORM" !== this.element.tagName ? (e = d.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), e.appendChild(b)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != e ? e : b) }, d.prototype.getExistingFallback = function() {
            var a, b, c, d, e, f;
            for (b = function(a) {
                    var b, c, d;
                    for (c = 0, d = a.length; c < d; c++)
                        if (b = a[c], /(^| )fallback($| )/.test(b.className)) return b
                }, e = ["div", "form"], c = 0, d = e.length; c < d; c++)
                if (f = e[c], a = b(this.element.getElementsByTagName(f))) return a
        }, d.prototype.setupEventListeners = function() {
            var a, b, c, d, e, f, g;
            for (f = this.listeners, g = [], c = 0, d = f.length; c < d; c++) a = f[c], g.push(function() {
                var c, d;
                c = a.events, d = [];
                for (b in c) e = c[b], d.push(a.element.addEventListener(b, e, !1));
                return d
            }());
            return g
        }, d.prototype.removeEventListeners = function() {
            var a, b, c, d, e, f, g;
            for (f = this.listeners, g = [], c = 0, d = f.length; c < d; c++) a = f[c], g.push(function() {
                var c, d;
                c = a.events, d = [];
                for (b in c) e = c[b], d.push(a.element.removeEventListener(b, e, !1));
                return d
            }());
            return g
        }, d.prototype.disable = function() { var a, b, c, d, e; for (this.clickableElements.forEach(function(a) { return a.classList.remove("dz-clickable") }), this.removeEventListeners(), d = this.files, e = [], b = 0, c = d.length; b < c; b++) a = d[b], e.push(this.cancelUpload(a)); return e }, d.prototype.enable = function() { return this.clickableElements.forEach(function(a) { return a.classList.add("dz-clickable") }), this.setupEventListeners() }, d.prototype.filesize = function(a) {
            var b, c, d, e, f, g, h, i;
            if (f = 0, g = "b", a > 0) {
                for (i = ["tb", "gb", "mb", "kb", "b"], c = d = 0, e = i.length; d < e; c = ++d)
                    if (h = i[c], b = Math.pow(this.options.filesizeBase, 4 - c) / 10, a >= b) { f = a / Math.pow(this.options.filesizeBase, 4 - c), g = h; break }
                f = Math.round(10 * f) / 10
            }
            return "<strong>" + f + "</strong> " + this.options.dictFileSizeUnits[g]
        }, d.prototype._updateMaxFilesReachedClass = function() { return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached") }, d.prototype.drop = function(a) {
            var b, c;
            a.dataTransfer && (this.emit("drop", a), b = a.dataTransfer.files, this.emit("addedfiles", b), b.length && (c = a.dataTransfer.items, c && c.length && null != c[0].webkitGetAsEntry ? this._addFilesFromItems(c) : this.handleFiles(b)))
        }, d.prototype.paste = function(a) { var b, c; if (null != (null != a && null != (c = a.clipboardData) ? c.items : void 0)) return this.emit("paste", a), b = a.clipboardData.items, b.length ? this._addFilesFromItems(b) : void 0 }, d.prototype.handleFiles = function(a) { var b, c, d, e; for (e = [], c = 0, d = a.length; c < d; c++) b = a[c], e.push(this.addFile(b)); return e }, d.prototype._addFilesFromItems = function(a) { var b, c, d, e, f; for (f = [], d = 0, e = a.length; d < e; d++) c = a[d], null != c.webkitGetAsEntry && (b = c.webkitGetAsEntry()) ? b.isFile ? f.push(this.addFile(c.getAsFile())) : b.isDirectory ? f.push(this._addFilesFromDirectory(b, b.name)) : f.push(void 0) : null != c.getAsFile && (null == c.kind || "file" === c.kind) ? f.push(this.addFile(c.getAsFile())) : f.push(void 0); return f }, d.prototype._addFilesFromDirectory = function(a, b) {
            var c, d, e;
            return c = a.createReader(), d = function(a) { return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log(a) : void 0 }, (e = function(a) {
                return function() {
                    return c.readEntries(function(c) {
                        var d, f, g;
                        if (c.length > 0) {
                            for (f = 0, g = c.length; f < g; f++) d = c[f], d.isFile ? d.file(function(c) { if (!a.options.ignoreHiddenFiles || "." !== c.name.substring(0, 1)) return c.fullPath = b + "/" + c.name, a.addFile(c) }) : d.isDirectory && a._addFilesFromDirectory(d, b + "/" + d.name);
                            e()
                        }
                        return null
                    }, d)
                }
            }(this))()
        }, d.prototype.accept = function(a, b) { return a.size > 1024 * this.options.maxFilesize * 1024 ? b(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(a.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : d.isValidFile(a, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (b(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", a)) : this.options.accept.call(this, a, b) : b(this.options.dictInvalidFileType) }, d.prototype.addFile = function(a) { return a.upload = { progress: 0, total: a.size, bytesSent: 0, filename: this._renameFile(a) }, this.files.push(a), a.status = d.ADDED, this.emit("addedfile", a), this._enqueueThumbnail(a), this.accept(a, function(b) { return function(c) { return c ? (a.accepted = !1, b._errorProcessing([a], c)) : (a.accepted = !0, b.options.autoQueue && b.enqueueFile(a)), b._updateMaxFilesReachedClass() } }(this)) }, d.prototype.enqueueFiles = function(a) { var b, c, d; for (c = 0, d = a.length; c < d; c++) b = a[c], this.enqueueFile(b); return null }, d.prototype.enqueueFile = function(a) { if (a.status !== d.ADDED || a.accepted !== !0) throw new Error("This file can't be queued because it has already been processed or was rejected."); if (a.status = d.QUEUED, this.options.autoProcessQueue) return setTimeout(function(a) { return function() { return a.processQueue() } }(this), 0) }, d.prototype._thumbnailQueue = [], d.prototype._processingThumbnail = !1, d.prototype._enqueueThumbnail = function(a) { if (this.options.createImageThumbnails && a.type.match(/image.*/) && a.size <= 1024 * this.options.maxThumbnailFilesize * 1024) return this._thumbnailQueue.push(a), setTimeout(function(a) { return function() { return a._processThumbnailQueue() } }(this), 0) }, d.prototype._processThumbnailQueue = function() { var a; if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) return this._processingThumbnail = !0, a = this._thumbnailQueue.shift(), this.createThumbnail(a, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, function(b) { return function(c) { return b.emit("thumbnail", a, c), b._processingThumbnail = !1, b._processThumbnailQueue() } }(this)) }, d.prototype.removeFile = function(a) { if (a.status === d.UPLOADING && this.cancelUpload(a), this.files = i(this.files, a), this.emit("removedfile", a), 0 === this.files.length) return this.emit("reset") }, d.prototype.removeAllFiles = function(a) { var b, c, e, f; for (null == a && (a = !1), f = this.files.slice(), c = 0, e = f.length; c < e; c++) b = f[c], (b.status !== d.UPLOADING || a) && this.removeFile(b); return null }, d.prototype.resizeImage = function(a, b, e, f, g) { return this.createThumbnail(a, b, e, f, !1, function(b) { return function(e, f) { var h, i; return null === f ? g(a) : (h = b.options.resizeMimeType, null == h && (h = a.type), i = f.toDataURL(h, b.options.resizeQuality), "image/jpeg" !== h && "image/jpg" !== h || (i = c.restore(a.dataURL, i)), g(d.dataURItoBlob(i))) } }(this)) }, d.prototype.createThumbnail = function(a, b, c, d, e, f) { var g; return g = new FileReader, g.onload = function(h) { return function() { return a.dataURL = g.result, "image/svg+xml" === a.type ? void(null != f && f(g.result)) : h.createThumbnailFromUrl(a, b, c, d, e, f) } }(this), g.readAsDataURL(a) }, d.prototype.createThumbnailFromUrl = function(a, b, c, d, e, f, h) {
            var i;
            return i = document.createElement("img"), h && (i.crossOrigin = h), i.onload = function(h) {
                return function() {
                    var j;
                    return j = function(a) { return a(1) }, "undefined" != typeof EXIF && null !== EXIF && e && (j = function(a) { return EXIF.getData(i, function() { return a(EXIF.getTag(this, "Orientation")) }) }), j(function(e) {
                        var j, k, l, m, n, o, p, q;
                        switch (a.width = i.width, a.height = i.height, p = h.options.resize.call(h, a, b, c, d), j = document.createElement("canvas"), k = j.getContext("2d"), j.width = p.trgWidth, j.height = p.trgHeight, e > 4 && (j.width = p.trgHeight, j.height = p.trgWidth), e) {
                            case 2:
                                k.translate(j.width, 0), k.scale(-1, 1);
                                break;
                            case 3:
                                k.translate(j.width, j.height), k.rotate(Math.PI);
                                break;
                            case 4:
                                k.translate(0, j.height), k.scale(1, -1);
                                break;
                            case 5:
                                k.rotate(.5 * Math.PI), k.scale(1, -1);
                                break;
                            case 6:
                                k.rotate(.5 * Math.PI), k.translate(0, -j.height);
                                break;
                            case 7:
                                k.rotate(.5 * Math.PI), k.translate(j.width, -j.height), k.scale(-1, 1);
                                break;
                            case 8:
                                k.rotate(-.5 * Math.PI), k.translate(-j.width, 0)
                        }
                        if (g(k, i, null != (l = p.srcX) ? l : 0, null != (m = p.srcY) ? m : 0, p.srcWidth, p.srcHeight, null != (n = p.trgX) ? n : 0, null != (o = p.trgY) ? o : 0, p.trgWidth, p.trgHeight), q = j.toDataURL("image/png"), null != f) return f(q, j)
                    })
                }
            }(this), null != f && (i.onerror = f), i.src = a.dataURL
        }, d.prototype.processQueue = function() {
            var a, b, c, d;
            if (b = this.options.parallelUploads, c = this.getUploadingFiles().length, a = c, !(c >= b) && (d = this.getQueuedFiles(), d.length > 0)) {
                if (this.options.uploadMultiple) return this.processFiles(d.slice(0, b - c));
                for (; a < b;) {
                    if (!d.length) return;
                    this.processFile(d.shift()), a++
                }
            }
        }, d.prototype.processFile = function(a) { return this.processFiles([a]) }, d.prototype.processFiles = function(a) { var b, c, e; for (c = 0, e = a.length; c < e; c++) b = a[c], b.processing = !0, b.status = d.UPLOADING, this.emit("processing", b); return this.options.uploadMultiple && this.emit("processingmultiple", a), this.uploadFiles(a) }, d.prototype._getFilesWithXhr = function(a) { var b, c; return c = function() { var c, d, e, f; for (e = this.files, f = [], c = 0, d = e.length; c < d; c++) b = e[c], b.xhr === a && f.push(b); return f }.call(this) }, d.prototype.cancelUpload = function(a) {
            var b, c, e, f, g, h, i;
            if (a.status === d.UPLOADING) {
                for (c = this._getFilesWithXhr(a.xhr), e = 0, g = c.length; e < g; e++) b = c[e], b.status = d.CANCELED;
                for (a.xhr.abort(), f = 0, h = c.length; f < h; f++) b = c[f], this.emit("canceled", b);
                this.options.uploadMultiple && this.emit("canceledmultiple", c)
            } else(i = a.status) !== d.ADDED && i !== d.QUEUED || (a.status = d.CANCELED, this.emit("canceled", a), this.options.uploadMultiple && this.emit("canceledmultiple", [a]));
            if (this.options.autoProcessQueue) return this.processQueue()
        }, f = function() { var a, b; return b = arguments[0], a = 2 <= arguments.length ? j.call(arguments, 1) : [], "function" == typeof b ? b.apply(this, a) : b }, d.prototype.uploadFile = function(a) { return this.uploadFiles([a]) }, d.prototype.uploadFiles = function(a) {
            var b, c, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O;
            for (O = new XMLHttpRequest, q = 0, u = a.length; q < u; q++) g = a[q], g.xhr = O;
            z = f(this.options.method, a), M = f(this.options.url, a), O.open(z, M, !0), O.timeout = f(this.options.timeout, a), O.withCredentials = !!this.options.withCredentials, J = null, i = function(b) { return function() { var c, d, e; for (e = [], c = 0, d = a.length; c < d; c++) g = a[c], e.push(b._errorProcessing(a, J || b.options.dictResponseError.replace("{{statusCode}}", O.status), O)); return e } }(this), L = function(b) {
                return function(c) {
                    var d, e, f, h, i, j, k, l, m;
                    if (null != c)
                        for (l = 100 * c.loaded / c.total, e = 0, h = a.length; e < h; e++) g = a[e], g.upload.progress = l, g.upload.total = c.total, g.upload.bytesSent = c.loaded;
                    else { for (d = !0, l = 100, f = 0, i = a.length; f < i; f++) g = a[f], 100 === g.upload.progress && g.upload.bytesSent === g.upload.total || (d = !1), g.upload.progress = l, g.upload.bytesSent = g.upload.total; if (d) return }
                    for (m = [], k = 0, j = a.length; k < j; k++) g = a[k], m.push(b.emit("uploadprogress", g, l, g.upload.bytesSent));
                    return m
                }
            }(this), O.onload = function(b) {
                return function(c) {
                    var e;
                    if (a[0].status !== d.CANCELED && 4 === O.readyState) {
                        if ("arraybuffer" !== O.responseType && "blob" !== O.responseType && (J = O.responseText, O.getResponseHeader("content-type") && ~O.getResponseHeader("content-type").indexOf("application/json"))) try { J = JSON.parse(J) } catch (a) { c = a, J = "Invalid JSON response from server." }
                        return L(), 200 <= (e = O.status) && e < 300 ? b._finished(a, J, c) : i()
                    }
                }
            }(this), O.onerror = function(b) { return function() { if (a[0].status !== d.CANCELED) return i() } }(this), C = null != (D = O.upload) ? D : O, C.onprogress = L, l = { Accept: "application/json", "Cache-Control": "no-cache", "X-Requested-With": "XMLHttpRequest" }, this.options.headers && e(l, this.options.headers);
            for (j in l) k = l[j], k && O.setRequestHeader(j, k);
            if (h = new FormData, this.options.params) { E = this.options.params; for (s in E) N = E[s], h.append(s, N) }
            for (r = 0, v = a.length; r < v; r++) g = a[r], this.emit("sending", g, O, h);
            if (this.options.uploadMultiple && this.emit("sendingmultiple", a, O, h), "FORM" === this.element.tagName)
                for (F = this.element.querySelectorAll("input, textarea, select, button"), t = 0, w = F.length; t < w; t++)
                    if (n = F[t], o = n.getAttribute("name"), p = n.getAttribute("type"), "SELECT" === n.tagName && n.hasAttribute("multiple"))
                        for (G = n.options, y = 0, x = G.length; y < x; y++) B = G[y], B.selected && h.append(o, B.value);
                    else(!p || "checkbox" !== (H = p.toLowerCase()) && "radio" !== H || n.checked) && h.append(o, n.value);
            for (b = 0, K = [], m = A = 0, I = a.length - 1; 0 <= I ? A <= I : A >= I; m = 0 <= I ? ++A : --A) c = function(c) { return function(d, e, f) { return function(d) { if (h.append(e, d, f), ++b === a.length) return c.submitRequest(O, h, a) } } }(this), K.push(this.options.transformFile.call(this, a[m], c(a[m], this._getParamName(m), a[m].upload.filename)));
            return K
        }, d.prototype.submitRequest = function(a, b, c) { return a.send(b) }, d.prototype._finished = function(a, b, c) { var e, f, g; for (f = 0, g = a.length; f < g; f++) e = a[f], e.status = d.SUCCESS, this.emit("success", e, b, c), this.emit("complete", e); if (this.options.uploadMultiple && (this.emit("successmultiple", a, b, c), this.emit("completemultiple", a)), this.options.autoProcessQueue) return this.processQueue() }, d.prototype._errorProcessing = function(a, b, c) { var e, f, g; for (f = 0, g = a.length; f < g; f++) e = a[f], e.status = d.ERROR, this.emit("error", e, b, c), this.emit("complete", e); if (this.options.uploadMultiple && (this.emit("errormultiple", a, b, c), this.emit("completemultiple", a)), this.options.autoProcessQueue) return this.processQueue() }, d
    }(b), a.version = "5.1.1", a.options = {}, a.optionsForElement = function(b) { return b.getAttribute("id") ? a.options[d(b.getAttribute("id"))] : void 0 }, a.instances = [], a.forElement = function(a) { if ("string" == typeof a && (a = document.querySelector(a)), null == (null != a ? a.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone."); return a.dropzone }, a.autoDiscover = !0, a.discover = function() {
        var b, c, d, e, f, g;
        for (document.querySelectorAll ? d = document.querySelectorAll(".dropzone") : (d = [], b = function(a) { var b, c, e, f; for (f = [], c = 0, e = a.length; c < e; c++) b = a[c], /(^| )dropzone($| )/.test(b.className) ? f.push(d.push(b)) : f.push(void 0); return f }, b(document.getElementsByTagName("div")), b(document.getElementsByTagName("form"))), g = [], e = 0, f = d.length; e < f; e++) c = d[e], a.optionsForElement(c) !== !1 ? g.push(new a(c)) : g.push(void 0);
        return g
    }, a.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i], a.isBrowserSupported = function() {
        var b, c, d, e, f;
        if (b = !0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
            if ("classList" in document.createElement("a"))
                for (e = a.blacklistedBrowsers, c = 0, d = e.length; c < d; c++) f = e[c], f.test(navigator.userAgent) && (b = !1);
            else b = !1;
        else b = !1;
        return b
    }, a.dataURItoBlob = function(a) { var b, c, d, e, f, g, h; for (c = atob(a.split(",")[1]), g = a.split(",")[0].split(":")[1].split(";")[0], b = new ArrayBuffer(c.length), e = new Uint8Array(b), d = f = 0, h = c.length; 0 <= h ? f <= h : f >= h; d = 0 <= h ? ++f : --f) e[d] = c.charCodeAt(d); return new Blob([b], { type: g }) }, i = function(a, b) { var c, d, e, f; for (f = [], d = 0, e = a.length; d < e; d++) c = a[d], c !== b && f.push(c); return f }, d = function(a) { return a.replace(/[\-_](\w)/g, function(a) { return a.charAt(1).toUpperCase() }) }, a.createElement = function(a) { var b; return b = document.createElement("div"), b.innerHTML = a, b.childNodes[0] }, a.elementInside = function(a, b) {
        if (a === b) return !0;
        for (; a = a.parentNode;)
            if (a === b) return !0;
        return !1
    }, a.getElement = function(a, b) { var c; if ("string" == typeof a ? c = document.querySelector(a) : null != a.nodeType && (c = a), null == c) throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector or a plain HTML element."); return c }, a.getElements = function(a, b) {
        var c, d, e, f, g, h, i, j;
        if (a instanceof Array) { e = []; try { for (f = 0, h = a.length; f < h; f++) d = a[f], e.push(this.getElement(d, b)) } catch (a) { c = a, e = null } } else if ("string" == typeof a)
            for (e = [], j = document.querySelectorAll(a), g = 0, i = j.length; g < i; g++) d = j[g], e.push(d);
        else null != a.nodeType && (e = [a]);
        if (null == e || !e.length) throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
        return e
    }, a.confirm = function(a, b, c) { return window.confirm(a) ? b() : null != c ? c() : void 0 }, a.isValidFile = function(a, b) {
        var c, d, e, f, g;
        if (!b) return !0;
        for (b = b.split(","), f = a.type, c = f.replace(/\/.*$/, ""), d = 0, e = b.length; d < e; d++)
            if (g = b[d], g = g.trim(), "." === g.charAt(0)) { if (a.name.toLowerCase().indexOf(g.toLowerCase(), a.name.length - g.length) !== -1) return !0 } else if (/\/\*$/.test(g)) { if (c === g.replace(/\/.*$/, "")) return !0 } else if (f === g) return !0;
        return !1
    }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function(b) { return this.each(function() { return new a(this, b) }) }), "undefined" != typeof module && null !== module ? module.exports = a : window.Dropzone = a, a.ADDED = "added", a.QUEUED = "queued", a.ACCEPTED = a.QUEUED, a.UPLOADING = "uploading", a.PROCESSING = a.UPLOADING, a.CANCELED = "canceled", a.ERROR = "error", a.SUCCESS = "success", f = function(a) { var b, c, d, e, f, g, h, i, j, k; for (h = a.naturalWidth, g = a.naturalHeight, c = document.createElement("canvas"), c.width = 1, c.height = g, d = c.getContext("2d"), d.drawImage(a, 0, 0), e = d.getImageData(1, 0, 1, g).data, k = 0, f = g, i = g; i > k;) b = e[4 * (i - 1) + 3], 0 === b ? f = i : k = i, i = f + k >> 1; return j = i / g, 0 === j ? 1 : j }, g = function(a, b, c, d, e, g, h, i, j, k) { var l; return l = f(b), a.drawImage(b, c, d, e, g, h, i, j, k / l) }, c = function() {
        function a() {}
        return a.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a.encode64 = function(a) {
            var b, c, d, e, f, g, h, i, j;
            for (j = "", b = void 0, c = void 0, d = "", e = void 0, f = void 0, g = void 0, h = "", i = 0;;)
                if (b = a[i++], c = a[i++], d = a[i++], e = b >> 2, f = (3 & b) << 4 | c >> 4, g = (15 & c) << 2 | d >> 6, h = 63 & d, isNaN(c) ? g = h = 64 : isNaN(d) && (h = 64), j = j + this.KEY_STR.charAt(e) + this.KEY_STR.charAt(f) + this.KEY_STR.charAt(g) + this.KEY_STR.charAt(h), b = c = d = "", e = f = g = h = "", !(i < a.length)) break;
            return j
        }, a.restore = function(a, b) { var c, d, e; return a.match("data:image/jpeg;base64,") ? (d = this.decode64(a.replace("data:image/jpeg;base64,", "")), e = this.slice2Segments(d), c = this.exifManipulation(b, e), "data:image/jpeg;base64," + this.encode64(c)) : b }, a.exifManipulation = function(a, b) { var c, d, e; return d = this.getExifArray(b), e = this.insertExif(a, d), c = new Uint8Array(e) }, a.getExifArray = function(a) {
            var b, c;
            for (b = void 0, c = 0; c < a.length;) {
                if (b = a[c], 255 === b[0] & 225 === b[1]) return b;
                c++
            }
            return []
        }, a.insertExif = function(a, b) { var c, d, e, f, g, h; return f = a.replace("data:image/jpeg;base64,", ""), e = this.decode64(f), h = e.indexOf(255, 3), g = e.slice(0, h), d = e.slice(h), c = g, c = c.concat(b), c = c.concat(d) }, a.slice2Segments = function(a) { var b, c, d, e, f; for (c = 0, f = [];;) { if (255 === a[c] & 218 === a[c + 1]) break; if (255 === a[c] & 216 === a[c + 1] ? c += 2 : (d = 256 * a[c + 2] + a[c + 3], b = c + d + 2, e = a.slice(c, b), f.push(e), c = b), c > a.length) break } return f }, a.decode64 = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l;
            for (l = "", d = void 0, e = void 0, f = "", g = void 0, h = void 0, i = void 0, j = "", k = 0, c = [], b = /[^A-Za-z0-9\+\/\=]/g, b.exec(a) && console.warning("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."), a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");;)
                if (g = this.KEY_STR.indexOf(a.charAt(k++)), h = this.KEY_STR.indexOf(a.charAt(k++)), i = this.KEY_STR.indexOf(a.charAt(k++)), j = this.KEY_STR.indexOf(a.charAt(k++)), d = g << 2 | h >> 4, e = (15 & h) << 4 | i >> 2, f = (3 & i) << 6 | j, c.push(d), 64 !== i && c.push(e), 64 !== j && c.push(f), d = e = f = "", g = h = i = j = "", !(k < a.length)) break;
            return c
        }, a
    }(), e = function(a, b) {
        var c, d, e, f, g, h, i, j, k;
        if (e = !1, k = !0, d = a.document, j = d.documentElement, c = d.addEventListener ? "addEventListener" : "attachEvent", i = d.addEventListener ? "removeEventListener" : "detachEvent", h = d.addEventListener ? "" : "on", f = function(c) { if ("readystatechange" !== c.type || "complete" === d.readyState) return ("load" === c.type ? a : d)[i](h + c.type, f, !1), !e && (e = !0) ? b.call(a, c.type || c) : void 0 }, g = function() { var a; try { j.doScroll("left") } catch (b) { return a = b, void setTimeout(g, 50) } return f("poll") }, "complete" !== d.readyState) {
            if (d.createEventObject && j.doScroll) {
                try { k = !a.frameElement } catch (a) {}
                k && g()
            }
            return d[c](h + "DOMContentLoaded", f, !1), d[c](h + "readystatechange", f, !1), a[c](h + "load", f, !1)
        }
    }, a._autoDiscoverFunction = function() { if (a.autoDiscover) return a.discover() }, e(window, a._autoDiscoverFunction)
}).call(this);