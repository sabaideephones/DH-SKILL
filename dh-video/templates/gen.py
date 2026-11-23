import json
S=json.load(open('script.json')); T=json.load(open('timing.json'))
html=open('scene_tpl.html').read()
html=html.replace('__S__',json.dumps(S,ensure_ascii=False)).replace('__T__',json.dumps(T['timing'])).replace('__TOTAL__',str(T['total']))
open('scene.html','w').write(html)
