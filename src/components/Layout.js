const Layout = () => {
    function removeAllChildNodes(parent) {
        while(parent.firstChild) {
            parent.removeChild(parent.firstChild)
        }
    }

    const handleClick = (id) => {
        var node= document.getElementById("old-block");
        removeAllChildNodes(node);
        for(var i = 0; i < id; i++) {
            var li = document.createElement("div")
            li.classList.add(`NewDiv`);
            node.appendChild(li);
            var url = 'https://s3.us-east-1.amazonaws.com/mx-production-editor/revisions/1bbd4ab5061015cb6535a857e411d08293f6de78/pngs/photo-placeholder.png'
            var image = new Image();
            image.src = url
            for(var j = 0; j < id; j++) {
                li.appendChild(image)
            }
        }
    }

    return (
        <div className="main">
        <div className="Div" onClick={() => handleClick(1)}>
            <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGNsYXNzPSJwYWdlIHN0YXJ0LXNlbGVjdGlvbiIgd2lkdGg9Ijk4LjQzOSUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCA5LjA5NDk0NzAxNzcyOTI4MmUtMTMgMTAwMDAgMTAxNTguNTc1MzYxMzkxMzE4Ij48ZyBjbGFzcz0ibm8tY2xpcHBpbmciPjxyZWN0IHg9IjAiIHk9IjkuMDk0OTQ3MDE3NzI5MjgyZS0xMyIgd2lkdGg9IjEwMDAwIiBoZWlnaHQ9IjEwMTU4LjU3NTM2MTM5MTMxOCIgZmlsbD0id2hpdGUiIHBvaW50ZXItZXZlbnRzPSJub25lIj48L3JlY3Q+PHJlY3Qgd2lkdGg9Ijg2MDAiIGhlaWdodD0iODYwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjgwLCA3NTkuMjg3NjgwNjk1NjYwMSkgcm90YXRlKDApIiBzdHlsZT0iZmlsbDogcmdiKDE5MSwgMTkxLCAxOTEpOyBzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDEwOyI+PC9yZWN0PjwvZz48L3N2Zz4=" alt="..." />
        </div>
        <div className="Div" onClick={() => handleClick(2)}>
            <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGNsYXNzPSJwYWdlIHN0YXJ0LXNlbGVjdGlvbiIgd2lkdGg9Ijk4LjQzOSUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCA5LjA5NDk0NzAxNzcyOTI4MmUtMTMgMTAwMDAgMTAxNTguNTc1MzYxMzkxMzE4Ij48ZyBjbGFzcz0ibm8tY2xpcHBpbmciPjxyZWN0IHg9IjAiIHk9IjkuMDk0OTQ3MDE3NzI5MjgyZS0xMyIgd2lkdGg9IjEwMDAwIiBoZWlnaHQ9IjEwMTU4LjU3NTM2MTM5MTMxOCIgZmlsbD0id2hpdGUiIHBvaW50ZXItZXZlbnRzPSJub25lIj48L3JlY3Q+PHJlY3Qgd2lkdGg9IjQxMDAiIGhlaWdodD0iNTYwMC4wMDAwMDAwMDAwMDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY4MCwgMjE5OS4yODc2ODA2OTU2NTk3KSByb3RhdGUoMCkiIHN0eWxlPSJmaWxsOiByZ2IoMTkxLCAxOTEsIDE5MSk7IHN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogMTA7Ij48L3JlY3Q+PHJlY3Qgd2lkdGg9IjQxMDAiIGhlaWdodD0iNTYwMC4wMDAwMDAwMDAwMDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUxODAsIDIxOTkuMjg3NjgwNjk1NjU5Nykgcm90YXRlKDApIiBzdHlsZT0iZmlsbDogcmdiKDE5MSwgMTkxLCAxOTEpOyBzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDEwOyI+PC9yZWN0PjwvZz48L3N2Zz4=" alt="..." />
        </div>
        <div className="Div" onClick={() => handleClick(3)}>
            <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGNsYXNzPSJwYWdlIHN0YXJ0LXNlbGVjdGlvbiIgd2lkdGg9Ijk4LjQzOSUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCA5LjA5NDk0NzAxNzcyOTI4MmUtMTMgMTAwMDAgMTAxNTguNTc1MzYxMzkxMzE4Ij48ZyBjbGFzcz0ibm8tY2xpcHBpbmciPjxyZWN0IHg9IjAiIHk9IjkuMDk0OTQ3MDE3NzI5MjgyZS0xMyIgd2lkdGg9IjEwMDAwIiBoZWlnaHQ9IjEwMTU4LjU3NTM2MTM5MTMxOCIgZmlsbD0id2hpdGUiIHBvaW50ZXItZXZlbnRzPSJub25lIj48L3JlY3Q+PHJlY3Qgd2lkdGg9IjU2MDAuMDAwMDAwMDAwMDAxIiBoZWlnaHQ9IjU2MDAuMDAwMDAwMDAwMDAyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NzkuOTk5OTk5OTk5OTk5MSwgMjE5OS4yODc2ODA2OTU2NTk3KSByb3RhdGUoMCkiIHN0eWxlPSJmaWxsOiByZ2IoMTkxLCAxOTEsIDE5MSk7IHN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogMTA7Ij48L3JlY3Q+PHJlY3Qgd2lkdGg9IjI2MDAiIGhlaWdodD0iMjU5OS45OTk5OTk5OTk5OTk1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NjgwLCAyMTk5LjI4NzY4MDY5NTY1OTcpIHJvdGF0ZSgwKSIgc3R5bGU9ImZpbGw6IHJnYigxOTEsIDE5MSwgMTkxKTsgc3Ryb2tlOiB3aGl0ZTsgc3Ryb2tlLXdpZHRoOiAxMDsiPjwvcmVjdD48cmVjdCB3aWR0aD0iMjYwMCIgaGVpZ2h0PSIyNjAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NjgwLCA1MTk5LjI4NzY4MDY5NTY2KSByb3RhdGUoMCkiIHN0eWxlPSJmaWxsOiByZ2IoMTkxLCAxOTEsIDE5MSk7IHN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogMTA7Ij48L3JlY3Q+PC9nPjwvc3ZnPg==" alt="..." />
        </div>
        <div className="Div" onClick={() => handleClick(4)}>
            <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGNsYXNzPSJwYWdlIHN0YXJ0LXNlbGVjdGlvbiIgd2lkdGg9Ijk4LjQzOSUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCA5LjA5NDk0NzAxNzcyOTI4MmUtMTMgMTAwMDAgMTAxNTguNTc1MzYxMzkxMzE4Ij48ZyBjbGFzcz0ibm8tY2xpcHBpbmciPjxyZWN0IHg9IjAiIHk9IjkuMDk0OTQ3MDE3NzI5MjgyZS0xMyIgd2lkdGg9IjEwMDAwIiBoZWlnaHQ9IjEwMTU4LjU3NTM2MTM5MTMxOCIgZmlsbD0id2hpdGUiIHBvaW50ZXItZXZlbnRzPSJub25lIj48L3JlY3Q+PHJlY3Qgd2lkdGg9IjQxMDAiIGhlaWdodD0iNDEwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjgwLCA3NTkuMjg3NjgwNjk1NjYwMSkgcm90YXRlKDApIiBzdHlsZT0iZmlsbDogcmdiKDE5MSwgMTkxLCAxOTEpOyBzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDEwOyI+PC9yZWN0PjxyZWN0IHdpZHRoPSI0MTAwIiBoZWlnaHQ9IjQxMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUxODAsIDc1OS4yODc2ODA2OTU2NjAxKSByb3RhdGUoMCkiIHN0eWxlPSJmaWxsOiByZ2IoMTkxLCAxOTEsIDE5MSk7IHN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogMTA7Ij48L3JlY3Q+PHJlY3Qgd2lkdGg9IjQxMDAiIGhlaWdodD0iNDA5OS45OTk5OTk5OTk5OTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY4MCwgNTI1OS4yODc2ODA2OTU2Nikgcm90YXRlKDApIiBzdHlsZT0iZmlsbDogcmdiKDE5MSwgMTkxLCAxOTEpOyBzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDEwOyI+PC9yZWN0PjxyZWN0IHdpZHRoPSI0MTAwIiBoZWlnaHQ9IjQwOTkuOTk5OTk5OTk5OTk5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MTgwLCA1MjU5LjI4NzY4MDY5NTY2KSByb3RhdGUoMCkiIHN0eWxlPSJmaWxsOiByZ2IoMTkxLCAxOTEsIDE5MSk7IHN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogMTA7Ij48L3JlY3Q+PC9nPjwvc3ZnPg==" alt="..." />
        </div>
        <div className="Div" onClick={() => handleClick(2)}>
            <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGNsYXNzPSJwYWdlIHN0YXJ0LXNlbGVjdGlvbiIgd2lkdGg9Ijk4LjQzOSUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCA5LjA5NDk0NzAxNzcyOTI4MmUtMTMgMTAwMDAgMTAxNTguNTc1MzYxMzkxMzE4Ij48ZyBjbGFzcz0ibm8tY2xpcHBpbmciPjxyZWN0IHg9IjAiIHk9IjkuMDk0OTQ3MDE3NzI5MjgyZS0xMyIgd2lkdGg9IjEwMDAwIiBoZWlnaHQ9IjEwMTU4LjU3NTM2MTM5MTMxOCIgZmlsbD0id2hpdGUiIHBvaW50ZXItZXZlbnRzPSJub25lIj48L3JlY3Q+PHJlY3Qgd2lkdGg9IjQxMDAiIGhlaWdodD0iNTYwMC4wMDAwMDAwMDAwMDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY4MCwgMjE5OS4yODc2ODA2OTU2NTk3KSByb3RhdGUoMCkiIHN0eWxlPSJmaWxsOiByZ2IoMTkxLCAxOTEsIDE5MSk7IHN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogMTA7Ij48L3JlY3Q+PHJlY3Qgd2lkdGg9IjQxMDAiIGhlaWdodD0iNTYwMC4wMDAwMDAwMDAwMDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUxODAsIDIxOTkuMjg3NjgwNjk1NjU5Nykgcm90YXRlKDApIiBzdHlsZT0iZmlsbDogcmdiKDE5MSwgMTkxLCAxOTEpOyBzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDEwOyI+PC9yZWN0PjwvZz48L3N2Zz4=" alt="..." />
        </div>
        <div className="Div" onClick={() => handleClick(1)}>
            <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGNsYXNzPSJwYWdlIHN0YXJ0LXNlbGVjdGlvbiIgd2lkdGg9Ijk4LjQzOSUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCA5LjA5NDk0NzAxNzcyOTI4MmUtMTMgMTAwMDAgMTAxNTguNTc1MzYxMzkxMzE4Ij48ZyBjbGFzcz0ibm8tY2xpcHBpbmciPjxyZWN0IHg9IjAiIHk9IjkuMDk0OTQ3MDE3NzI5MjgyZS0xMyIgd2lkdGg9IjEwMDAwIiBoZWlnaHQ9IjEwMTU4LjU3NTM2MTM5MTMxOCIgZmlsbD0id2hpdGUiIHBvaW50ZXItZXZlbnRzPSJub25lIj48L3JlY3Q+PHJlY3Qgd2lkdGg9Ijg2MDAiIGhlaWdodD0iODYwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjgwLCA3NTkuMjg3NjgwNjk1NjYwMSkgcm90YXRlKDApIiBzdHlsZT0iZmlsbDogcmdiKDE5MSwgMTkxLCAxOTEpOyBzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDEwOyI+PC9yZWN0PjwvZz48L3N2Zz4=" alt="..." />
        </div>
        </div>
    )
}

export default Layout;
