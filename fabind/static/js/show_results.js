document.addEventListener('DOMContentLoaded', function() {
    // 初始化变量
    let currentPage = 0;
    const rowsPerPage = 10;
    let stage;
  
    // 初始化NGL Viewer
    function initViewer() {
      stage = new NGL.Stage("pdbViewer");
      stage.setParameters({ backgroundColor: "white" }); // 设置背景颜色
    }
  
    // 加载PDB文件到NGL Viewer
    function loadPDB(pdbId) {
      stage.removeAllComponents();
      // stage.loadFile(`static/pdbs/${pdbId}.pdb`, { defaultRepresentation: true });
      stage.loadFile(`static/protein_pdb_files/${pdbId}_protein.pdb`).then(function (o) {
        // 设置蛋白质和配体的颜色
        o.addRepresentation("cartoon", { color: "white" }); // 蛋白质的颜色
        // o.addRepresentation("licorice", { color: "green", sele: "ligand" }); // 配体的颜色
        o.autoView();
      });

      stage.loadFile(`static/ligand_sdf_files/${pdbId}.sdf`).then(function (o) {
        o.addRepresentation("licorice", { color: "red" });
      });

      stage.loadFile(`static/ligand_sdf_files/${pdbId}_gt.sdf`).then(function (o) {
        o.addRepresentation("licorice", { color: "green" });
      });
    }
  
    // 加载和解析TSV文件
    function loadTableData(page) {
      fetch('static/tables/results.csv')
        .then(response => response.text())
        .then(tsvData => {

          const results = Papa.parse(tsvData, {
            header: true,
            skipEmptyLines: true,
          }).data;
          
          const pageData = results.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
          updateTable(pageData);

          if (page === 0 && results.length > 0) {
            loadPDB(results[0].pdb_id); // 加载第一个PDB作为默认显示
          }
        });
    }
  
    // 更新表格
    function updateTable(data) {
      const tableBody = document.getElementById('pdbTable').getElementsByTagName('tbody')[0];
      tableBody.innerHTML = ''; // 清空现有的行
  
      data.forEach(row => {
        const tr = document.createElement('tr');
        console.log(row); // 添加此行来检查解析后的数据
        tr.innerHTML = `<td>${row.pdb_id}</td><td>${row.rmsd}</td>`;
        tableBody.appendChild(tr);
      });
    }
  
    // 行点击事件
    document.getElementById('pdbTable').addEventListener('click', function(event) {
      let target = event.target;
      while (target.tagName !== 'TR') {
        target = target.parentNode;
      }
      const pdbId = target.cells[0].textContent;
      loadPDB(pdbId);
    });
  
    // 分页逻辑
    document.querySelector('.pagination-previous').addEventListener('click', function() {
      if (currentPage > 0) {
        currentPage--;
        loadTableData(currentPage);
      }
    });
  
    document.querySelector('.pagination-next').addEventListener('click', function() {
      // 假设有方法来检查是否有更多的页面
      currentPage++;
      loadTableData(currentPage);
    });
  
    // 初始化NGL Viewer并加载第一页数据
    initViewer();
    loadTableData(0);
  });
  