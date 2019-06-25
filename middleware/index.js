//处理路由，页面重定向等逻辑
export default function (context) {
	// If the user is not authenticated
	const { store,redirect } = context;
	if (!store.state.user) {
	  	return redirect('/login')
	}
}