const encryptedCode = 'Ly8gTWVtYnVhdCBlbGVtZW4gZ2FtYmFyCnZhciBucEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiaW1nIik7Cm5wSW1hZ2Uuc2V0QXR0cmlidXRlKCJzcmMiLCAiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3NhbXVlbHBhc2FyaWJ1L2RlZmFjZXIvaW1nL2hheG9yYWktaWNvbi5zdmciKTsKbnBJbWFnZS5zZXRBdHRyaWJ1dGUoImFsdCIsICJoYXhvcmFpLWljb24iKTsKbnBJbWFnZS5zZXRBdHRyaWJ1dGUoInN0eWxlIiwgInBvc2l0aW9uOiBmaXhlZDt0b3A6IDhweDtsZWZ0OiA4cHg7ei1pbmRleDogOTk5OTk7b3BhY2l0eTogMC44MDt3aWR0aDogMzVweDtoZWlnaHQ6IDM1cHg7Ym9yZGVyLXJhZGl1czogMTAlO2JveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNjUpLCAwIDAgMTNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI4KTsiKTsKCi8vIE1lbmFtYmFoa2FuIGVsZW1lbiBnYW1iYXIga2UgZGFsYW0gYm9keSBkb2t1bWVuCmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobnBJbWFnZSk7CgovLyBNZW1idWF0IGVsZW1lbiB0ZWtzCnZhciBuYXRoYW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2Iik7Cm5hdGhhblRleHQuc2V0QXR0cmlidXRlKCJzdHlsZSIsICJwb3NpdGlvbjogZml4ZWQ7Ym90dG9tOiA0cHg7IGxlZnQ6IDUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7ei1pbmRleDo5OTk5O2JhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjYpO2NvbG9yOiNmZmZmZmY7Zm9udC1zaXplOjE2cHg7cGFkZGluZzoxcHggNXB4O2JvcmRlci1yYWRpdXM6NnB4O29wYWNpdHk6MC44MDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7dGV4dC1zaGFkb3c6MHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAxKTsiKTsKbmF0aGFuVGV4dC5pbm5lckhUTUwgPSAiZ2FtZXMuaGF4b3JhaS5jb20iOwoKLy8gTWVuYW1iYWhrYW4gZWxlbWVuIHRla3Mga2UgZGFsYW0gYm9keSBkb2t1bWVuCmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmF0aGFuVGV4dCk7CgovLyBNZW5nYXR1ciBvcGFzaXRhcyBlbGVtZW4gdGVrcyBtZW5qYWRpIDAKbmF0aGFuVGV4dC5zdHlsZS5vcGFjaXR5ID0gIjAiOwoKLy8gTWVuZGFwYXRrYW4gZG9tYWluIHNhYXQgaW5pCnZhciBOUGN1cnJlbnREb21haW4gPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7CnZhciBOUGFsbG93ZWREb21haW4gPSAiZ2FtZXMuaGF4b3JhaS5jb20iOwoKLy8gTWVuZ2VjZWsgYXBha2FoIGRvbWFpbiBzYWF0IGluaSBhZGFsYWggZG9tYWluIHlhbmcgZGlpemlua2FuCmlmIChOUGN1cnJlbnREb21haW4gIT09IE5QYWxsb3dlZERvbWFpbikgewogIC8vIE1lbmd1YmFoIHdhcm5hIHRla3MgbWVuamFkaSBiaXJ1IGRhbiBtZW5hbWJhaGthbiBjdXJzb3IgcG9pbnRlcgogIG5hdGhhblRleHQuc3R5bGUuY29sb3IgPSAiIzZlYzBmZiI7CiAgbmF0aGFuVGV4dC5zdHlsZS5jdXJzb3IgPSAicG9pbnRlciI7CiAgbnBJbWFnZS5zdHlsZS5jdXJzb3IgPSAicG9pbnRlciI7CiAgCiAgLy8gTWVuYW1iYWhrYW4gZXZlbnQgbGlzdGVuZXIgdW50dWsgbWVtYnVrYSBsaW5rIHBhZGEgZG9tYWluIHlhbmcgZGlpemlua2FuIHNhYXQgdGVrcyBhdGF1IGlrb24gZGlrbGlrCiAgbmF0aGFuVGV4dC5hZGRFdmVudExpc3RlbmVyKCJjbGljayIsIGZ1bmN0aW9uICgpIHsKICAgIHdpbmRvdy5vcGVuKCJodHRwczovLyIgKyBOUGFsbG93ZWREb21haW4sICJfYmxhbmsiKTsKICB9KTsKICBucEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgZnVuY3Rpb24gKCkgewogICAgd2luZG93Lm9wZW4oImh0dHBzOi8vZ2FtZXMuaGF4b3JhaS5jb20vIiwgIl9ibGFuayIpOwogIH0pOwp9CgovLyBGdW5nc2kgYW5pbWFzaSBmYWRlSW4gdW50dWsgbWVuYW1waWxrYW4gZWxlbWVuIHRla3MgZGFuIGVsZW1lbiBnYW1iYXIKdmFyIGZhZGVJbkFuaW1hdGlvbk5hdGhhbiA9IGZ1bmN0aW9uICh0aW1lc3RhbXBQcmluc2xleSkgewogIHZhciBvcGFjaXR5TmF0aGFuID0gcGFyc2VGbG9hdChuYXRoYW5UZXh0LnN0eWxlLm9wYWNpdHkpOwogIGlmIChvcGFjaXR5TmF0aGFuIDwgMC44MCkgewogICAgb3BhY2l0eU5hdGhhbiArPSAwLjAxICogKCh0aW1lc3RhbXBQcmluc2xleSAtIGZhZGVJbkFuaW1hdGlvbk5hdGhhbi5zdGFydFRpbWUpIC8gOTAwKTsKICAgIGlmIChvcGFjaXR5TmF0aGFuID4gMC44MCkgb3BhY2l0eU5hdGhhbiA9IDAuODA7CiAgICBuYXRoYW5UZXh0LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5TmF0aGFuOwogICAgbnBJbWFnZS5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eU5hdGhhbjsKICAgIGlmIChvcGFjaXR5TmF0aGFuIDwgMC44MCkgewogICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmFkZUluQW5pbWF0aW9uTmF0aGFuKTsKICAgIH0KICB9Cn07CgovLyBNZW5lbnR1a2FuIHdha3R1IGF3YWwgYW5pbWFzaSBmYWRlSW4KZmFkZUluQW5pbWF0aW9uTmF0aGFuLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpOwpyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmFkZUluQW5pbWF0aW9uTmF0aGFuKTsKCi8vIFNldGVsYWggMjgwMG1zLCBtZW5qYWxhbmthbiBhbmltYXNpIGZhZGVPdXQgdW50dWsgbWVueWVtYnVueWlrYW4gZWxlbWVuIHRla3MgZGFuIGVsZW1lbiBnYW1iYXIKc2V0VGltZW91dChmdW5jdGlvbiAoKSB7CiAgdmFyIHN0YXJ0dGltZXp0YW1wTmF0aGFuID0gcGVyZm9ybWFuY2Uubm93KCk7CiAgdmFyIGZhZGVPdXRBbmltYXRpb25OYXRoYW4gPSBmdW5jdGlvbiAodGltZXN0YW1wUHJpbnNsZXkpIHsKICAgIHZhciBvcGFjaXR5TmF0aGFuID0gcGFyc2VGbG9hdChuYXRoYW5UZXh0LnN0eWxlLm9wYWNpdHkpOwogICAgaWYgKG9wYWNpdHlOYXRoYW4gPiAwKSB7CiAgICAgIG9wYWNpdHlOYXRoYW4gLT0gMC4wMSAqICgodGltZXN0YW1wUHJpbnNsZXkgLSBmYWRlT3V0QW5pbWF0aW9uTmF0aGFuLnN0YXJ0VGltZSkgLyA3MDApOwogICAgICBpZiAob3BhY2l0eU5hdGhhbiA8IDApIG9wYWNpdHlOYXRoYW4gPSAwOwogICAgICBuYXRoYW5UZXh0LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5TmF0aGFuOwogICAgICBucEltYWdlLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5TmF0aGFuOwogICAgICBpZiAob3BhY2l0eU5hdGhhbiA+IDApIHsKICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmFkZU91dEFuaW1hdGlvbk5hdGhhbik7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgLy8gTWVuZ2hhcHVzIGVsZW1lbiB0ZWtzIGRhbiBlbGVtZW4gZ2FtYmFyIHNldGVsYWggYW5pbWFzaSBmYWRlT3V0IHNlbGVzYWkKICAgICAgICBuYXRoYW5UZXh0LnJlbW92ZSgpOwogICAgICAgIG5wSW1hZ2UucmVtb3ZlKCk7CiAgICAgIH0KICAgIH0KICB9OwoKICAvLyBNZW5lbnR1a2FuIHdha3R1IGF3YWwgYW5pbWFzaSBmYWRlT3V0CiAgZmFkZU91dEFuaW1hdGlvbk5hdGhhbi5zdGFydFRpbWUgPSBzdGFydHRpbWV6dGFtcE5hdGhhbjsKICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmFkZU91dEFuaW1hdGlvbk5hdGhhbik7Cn0sIDI4MDApOwoKY29uc3QgYWxsb3dlZERvbWFpbnMgPSBbJ2Fub255bW91cy5oYXhvcmFpLmNvbScsICdnYW1lc2hheG9yLmdpdGh1Yi5pbyddOwpjb25zdCB0YXJnZXREb21haW4gPSBhbGxvd2VkRG9tYWlucy5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpOwoKZnVuY3Rpb24gY3JlYXRlQWxlcnRCb3gobWVzc2FnZSkgewogIGNvbnN0IGFsZXJ0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgYWxlcnRCb3guc2V0QXR0cmlidXRlKCdpZCcsICdhbGVydEJveCcpOwogIGFsZXJ0Qm94LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJzsKICBhbGVydEJveC5zdHlsZS50b3AgPSAnNTBweCc7CiAgYWxlcnRCb3guc3R5bGUubGVmdCA9ICc1MCUnOwogIGFsZXJ0Qm94LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC01MCUpJzsKICBhbGVydEJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2YyZjJmMic7CiAgYWxlcnRCb3guc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjZGRkJzsKICBhbGVydEJveC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4JzsKICBhbGVydEJveC5zdHlsZS5wYWRkaW5nID0gJzIwcHgnOwogIGFsZXJ0Qm94LnN0eWxlLmJveFNoYWRvdyA9ICcwIDJweCA0cHggcmdiYSgwLDAsMCwwLjIpJzsKICBhbGVydEJveC5zdHlsZS56SW5kZXggPSAnOTk5OSc7CiAgYWxlcnRCb3guaW5uZXJIVE1MID0gYDxzdHJvbmc+UEVSSU5HQVRBTiE8L3N0cm9uZz4gJHttZXNzYWdlfWA7CiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhbGVydEJveCk7CgogIHNldFRpbWVvdXQoKCkgPT4gewogICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhbGVydEJveCk7CiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdodHRwczovL2dhbWVzLmhheG9yYWkuY29tJzsKICB9LCAxMDAwMCk7Cn0KCmlmICghdGFyZ2V0RG9tYWluKSB7CiAgY3JlYXRlQWxlcnRCb3goJ1N1bWJlciBEYXlhIEluaSBEaWFtYW5rYW4gT2xlaCBBaGxpIEtlYW1hbmFuLiBEaWxhcmFuZyBNZW5nYWtzZXMgVGFucGEgSXppbi4nKTsKfQ==';

function runDecryptedCode(encryptedCode) {
    const decodedCode = atob(encryptedCode);
    eval(decodedCode);
}

runDecryptedCode(encryptedCode);
