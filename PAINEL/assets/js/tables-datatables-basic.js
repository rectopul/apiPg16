"use strict";
let fv, offCanvasEl;
document.addEventListener("DOMContentLoaded", function(e) {
    {
        const a = document.getElementById("form-add-new-record");
        return setTimeout(() => {
            const e = document.querySelector(".create-new"),
                a = document.querySelector("#add-new-record");
            e && e.addEventListener("click", function() { offCanvasEl = new bootstrap.Offcanvas(a), a.querySelector(".dt-full-name").value = "", a.querySelector(".dt-post").value = "", a.querySelector(".dt-email").value = "", a.querySelector(".dt-date").value = "", a.querySelector(".dt-salary").value = "", offCanvasEl.show() })
        }, 200), fv = FormValidation.formValidation(a, { fields: { basicFullname: { validators: { notEmpty: { message: "The name is required" } } }, basicPost: { validators: { notEmpty: { message: "Post field is required" } } }, basicEmail: { validators: { notEmpty: { message: "The Email is required" }, emailAddress: { message: "The value is not a valid email address" } } }, basicDate: { validators: { notEmpty: { message: "Joining Date is required" }, date: { format: "MM/DD/YYYY", message: "The value is not a valid date" } } }, basicSalary: { validators: { notEmpty: { message: "Basic Salary is required" } } } }, plugins: { trigger: new FormValidation.plugins.Trigger, bootstrap5: new FormValidation.plugins.Bootstrap5({ eleValidClass: "", rowSelector: ".col-sm-12" }), submitButton: new FormValidation.plugins.SubmitButton, autoFocus: new FormValidation.plugins.AutoFocus }, init: e => { e.on("plugins.message.placed", function(e) { e.element.parentElement.classList.contains("input-group") && e.element.parentElement.insertAdjacentElement("afterend", e.messageElement) }) } }), void flatpickr(a.querySelector('[name="basicDate"]'), { enableTime: !1, dateFormat: "m/d/Y", onChange: function() { fv.revalidateField("basicDate") } })
    }
}), $(function() {
    var n, a, e = $(".datatables-basic"),
        t = $(".dt-complex-header"),
        s = $(".dt-row-grouping"),
        l = $(".dt-multilingual"),
        r = (e.length && (n = e.DataTable({
            ajax: assetsPath + "/json/table-datatable.json",
            columns: [{ data: "" }, { data: "id" }, { data: "id" }, { data: "full_name" }, { data: "email" }, { data: "start_date" }, { data: "salary" }, { data: "status" }, { data: "" }],
            columnDefs: [{ className: "control", orderable: !1, searchable: !1, responsivePriority: 2, targets: 0, render: function(e, a, t, s) { return "" } }, { targets: 1, orderable: !1, searchable: !1, responsivePriority: 3, checkboxes: !0, checkboxes: { selectAllRender: '<input type="checkbox" class="form-check-input">' }, render: function() { return '<input type="checkbox" class="dt-checkboxes form-check-input">' } }, { targets: 2, searchable: !1, visible: !1 }, {
                targets: 3,
                responsivePriority: 4,
                render: function(e, a, t, s) {
                    var l = t.avatar,
                        n = t.full_name,
                        r = t.post;
                    return '<div class="d-flex justify-content-start align-items-center"><div class="avatar-wrapper"><div class="avatar me-2">' + (l ? '<img src="' + assetsPath + "/img/avatars/" + l + '" alt="Avatar" class="rounded-circle">' : '<span class="avatar-initial rounded-circle bg-label-' + ["success", "danger", "warning", "info", "dark", "primary", "secondary"][Math.floor(6 * Math.random())] + '">' + (l = (((l = (n = t.full_name).match(/\b\w/g) || []).shift() || "") + (l.pop() || "")).toUpperCase()) + "</span>") + '</div></div><div class="d-flex flex-column"><span class="emp_name text-truncate">' + n + '</span><small class="emp_post text-truncate text-muted">' + r + "</small></div></div>"
                }
            }, { responsivePriority: 1, targets: 4 }, {
                targets: -2,
                render: function(e, a, t, s) {
                    var t = t.status,
                        l = { 1: { title: "Current", class: "bg-label-primary" }, 2: { title: "Professional", class: " bg-label-success" }, 3: { title: "Rejected", class: " bg-label-danger" }, 4: { title: "Resigned", class: " bg-label-warning" }, 5: { title: "Applied", class: " bg-label-info" } };
                    return void 0 === l[t] ? e : '<span class="badge ' + l[t].class + '">' + l[t].title + "</span>"
                }
            }, { targets: -1, title: "Actions", orderable: !1, searchable: !1, render: function(e, a, t, s) { return '<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></a><ul class="dropdown-menu dropdown-menu-end"><li><a href="javascript:;" class="dropdown-item">Details</a></li><li><a href="javascript:;" class="dropdown-item">Archive</a></li><div class="dropdown-divider"></div><li><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></li></ul></div><a href="javascript:;" class="btn btn-sm btn-icon item-edit"><i class="bx bxs-edit"></i></a>' } }],
            order: [
                [2, "desc"]
            ],
            dom: '<"card-header flex-column flex-md-row"<"head-label text-center"><"dt-action-buttons text-end pt-3 pt-md-0"B>><"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
            displayLength: 7,
            lengthMenu: [7, 10, 25, 50, 75, 100],
            buttons: [{ extend: "collection", className: "btn btn-label-primary dropdown-toggle me-2", text: '<i class="bx bx-export me-sm-2"></i> <span class="d-none d-sm-inline-block">Export</span>', buttons: [{ extend: "print", text: '<i class="bx bx-printer me-2" ></i>Print', className: "dropdown-item", exportOptions: { columns: [3, 4, 5, 6, 7] } }, { extend: "csv", text: '<i class="bx bx-file me-2" ></i>Csv', className: "dropdown-item", exportOptions: { columns: [3, 4, 5, 6, 7] } }, { extend: "excel", text: "Excel", className: "dropdown-item", exportOptions: { columns: [3, 4, 5, 6, 7] } }, { extend: "pdf", text: '<i class="bx bxs-file-pdf me-2"></i>Pdf', className: "dropdown-item", exportOptions: { columns: [3, 4, 5, 6, 7] } }, { extend: "copy", text: '<i class="bx bx-copy me-2" ></i>Copy', className: "dropdown-item", exportOptions: { columns: [3, 4, 5, 6, 7] } }] }, { text: '<i class="bx bx-plus me-sm-2"></i> <span class="d-none d-sm-inline-block">Add New Record</span>', className: "create-new btn btn-primary" }],
            responsive: { details: { display: $.fn.dataTable.Responsive.display.modal({ header: function(e) { return "Details of " + e.data().full_name } }), type: "column", renderer: function(e, a, t) { t = $.map(t, function(e, a) { return "" !== e.title ? '<tr data-dt-row="' + e.rowIndex + '" data-dt-column="' + e.columnIndex + '"><td>' + e.title + ":</td> <td>" + e.data + "</td></tr>" : "" }).join(""); return !!t && $('<table class="table"/><tbody />').append(t) } } }
        }), $("div.head-label").html('<h5 class="card-title mb-0">DataTable with Buttons</h5>')), 101);
    fv.on("core.form.valid", function() {
        var e = $(".add-new-record .dt-full-name").val(),
            a = $(".add-new-record .dt-post").val(),
            t = $(".add-new-record .dt-email").val(),
            s = $(".add-new-record .dt-date").val(),
            l = $(".add-new-record .dt-salary").val();
        "" != e && (n.row.add({ id: r, full_name: e, post: a, email: t, start_date: s, salary: "$" + l, status: 5 }).draw(), r++, offCanvasEl.hide())
    }), $(".datatables-basic tbody").on("click", ".delete-record", function() { n.row($(this).parents("tr")).remove().draw() }), t.length && t.DataTable({
        ajax: assetsPath + "/json/table-datatable.json",
        columns: [{ data: "full_name" }, { data: "email" }, { data: "city" }, { data: "post" }, { data: "salary" }, { data: "status" }, { data: "" }],
        columnDefs: [{
            targets: -2,
            render: function(e, a, t, s) {
                var t = t.status,
                    l = { 1: { title: "Current", class: "bg-label-primary" }, 2: { title: "Professional", class: " bg-label-success" }, 3: { title: "Rejected", class: " bg-label-danger" }, 4: { title: "Resigned", class: " bg-label-warning" }, 5: { title: "Applied", class: " bg-label-info" } };
                return void 0 === l[t] ? e : '<span class="badge ' + l[t].class + '">' + l[t].title + "</span>"
            }
        }, { targets: -1, title: "Actions", orderable: !1, render: function(e, a, t, s) { return '<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></a><div class="dropdown-menu dropdown-menu-end"><a href="javascript:;" class="dropdown-item">Details</a><a href="javascript:;" class="dropdown-item">Archive</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></div></div><a href="javascript:;" class="btn btn-sm btn-icon item-edit"><i class="bx bxs-edit"></i></a>' } }],
        dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>><"table-responsive"t><"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        displayLength: 7,
        lengthMenu: [7, 10, 25, 50, 75, 100]
    }), s.length && (a = s.DataTable({
        ajax: assetsPath + "/json/table-datatable.json",
        columns: [{ data: "" }, { data: "full_name" }, { data: "post" }, { data: "email" }, { data: "city" }, { data: "start_date" }, { data: "salary" }, { data: "status" }, { data: "" }],
        columnDefs: [{ className: "control", orderable: !1, targets: 0, searchable: !1, render: function(e, a, t, s) { return "" } }, { visible: !1, targets: 2 }, {
            targets: -2,
            render: function(e, a, t, s) {
                var t = t.status,
                    l = { 1: { title: "Current", class: "bg-label-primary" }, 2: { title: "Professional", class: " bg-label-success" }, 3: { title: "Rejected", class: " bg-label-danger" }, 4: { title: "Resigned", class: " bg-label-warning" }, 5: { title: "Applied", class: " bg-label-info" } };
                return void 0 === l[t] ? e : '<span class="badge ' + l[t].class + '">' + l[t].title + "</span>"
            }
        }, { targets: -1, title: "Actions", orderable: !1, searchable: !1, render: function(e, a, t, s) { return '<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></a><div class="dropdown-menu dropdown-menu-end"><a href="javascript:;" class="dropdown-item">Details</a><a href="javascript:;" class="dropdown-item">Archive</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></div></div><a href="javascript:;" class="btn btn-sm btn-icon item-edit"><i class="bx bxs-edit"></i></a>' } }],
        order: [
            [2, "asc"]
        ],
        dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        displayLength: 7,
        lengthMenu: [7, 10, 25, 50, 75, 100],
        drawCallback: function(e) {
            var a = this.api(),
                t = a.rows({ page: "current" }).nodes(),
                s = null;
            a.column(2, { page: "current" }).data().each(function(e, a) { s !== e && ($(t).eq(a).before('<tr class="group"><td colspan="8">' + e + "</td></tr>"), s = e) })
        },
        responsive: { details: { display: $.fn.dataTable.Responsive.display.modal({ header: function(e) { return "Details of " + e.data().full_name } }), type: "column", renderer: function(e, a, t) { t = $.map(t, function(e, a) { return "" !== e.title ? '<tr data-dt-row="' + e.rowIndex + '" data-dt-column="' + e.columnIndex + '"><td>' + e.title + ":</td> <td>" + e.data + "</td></tr>" : "" }).join(""); return !!t && $('<table class="table"/><tbody />').append(t) } } }
    }), $(".dt-row-grouping tbody").on("click", "tr.group", function() {
        var e = a.order()[0];
        (2 === e[0] && "asc" === e[1] ? a.order([2, "desc"]) : a.order([2, "asc"])).draw()
    }));
    l.length && l.DataTable({
        ajax: assetsPath + "/json/table-datatable.json",
        columns: [{ data: "" }, { data: "full_name" }, { data: "post" }, { data: "email" }, { data: "start_date" }, { data: "salary" }, { data: "status" }, { data: "" }],
        columnDefs: [{ className: "control", orderable: !1, targets: 0, searchable: !1, render: function(e, a, t, s) { return "" } }, {
            targets: -2,
            render: function(e, a, t, s) {
                var t = t.status,
                    l = { 1: { title: "Current", class: "bg-label-primary" }, 2: { title: "Professional", class: " bg-label-success" }, 3: { title: "Rejected", class: " bg-label-danger" }, 4: { title: "Resigned", class: " bg-label-warning" }, 5: { title: "Applied", class: " bg-label-info" } };
                return void 0 === l[t] ? e : '<span class="badge ' + l[t].class + '">' + l[t].title + "</span>"
            }
        }, { targets: -1, title: "Actions", orderable: !1, searchable: !1, render: function(e, a, t, s) { return '<div class="d-inline-block"><a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></a><div class="dropdown-menu dropdown-menu-end"><a href="javascript:;" class="dropdown-item">Details</a><a href="javascript:;" class="dropdown-item">Archive</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></div></div><a href="javascript:;" class="btn btn-sm btn-icon item-edit"><i class="bx bxs-edit"></i></a>' } }],
        language: { url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/German.json" },
        displayLength: 7,
        dom: '<"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        lengthMenu: [7, 10, 25, 50, 75, 100],
        responsive: { details: { display: $.fn.dataTable.Responsive.display.modal({ header: function(e) { return "Details of " + e.data().full_name } }), type: "column", renderer: function(e, a, t) { t = $.map(t, function(e, a) { return "" !== e.title ? '<tr data-dt-row="' + e.rowIndex + '" data-dt-column="' + e.columnIndex + '"><td>' + e.title + ":</td> <td>" + e.data + "</td></tr>" : "" }).join(""); return !!t && $('<table class="table"/><tbody />').append(t) } } }
    }), setTimeout(() => { $(".dataTables_filter .form-control").removeClass("form-control-sm"), $(".dataTables_length .form-select").removeClass("form-select-sm") }, 300)
});