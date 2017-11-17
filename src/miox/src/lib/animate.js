/**
 * Created by evio on 2017/8/30.
 */
export default async function renderWebViewWithAnimate(app, prevNode, nextNode) {
  const animate = app.plugin.get('animate');

  nextNode && nextNode.classList.add('active');

  if (animate && app.installed && app.history.session) {
    await Promise.all([
      animate.leave(prevNode),
      animate.enter(nextNode)
    ]);
  }

  prevNode && prevNode.classList.remove('active');
}