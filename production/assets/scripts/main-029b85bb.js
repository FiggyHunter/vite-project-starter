(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();let i=new Date().getSeconds();console.log("nesto1222345");console.log(i);i==="gurabija"&&console.log("test");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi0wMjliODViYi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdml0ZS1qcy92aXRlL21vZHVsZXByZWxvYWQtcG9seWZpbGwiLCIuLi8uLi8uLi9kZXYvc2NyaXB0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIl9fVklURV9JU19NT0RFUk5fXyYmKGZ1bmN0aW9uIHBvbHlmaWxsKCkge1xuICAgIGNvbnN0IHJlbExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJykucmVsTGlzdDtcbiAgICBpZiAocmVsTGlzdCAmJiByZWxMaXN0LnN1cHBvcnRzICYmIHJlbExpc3Quc3VwcG9ydHMoJ21vZHVsZXByZWxvYWQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3QgbGluayBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cIm1vZHVsZXByZWxvYWRcIl0nKSkge1xuICAgICAgICBwcm9jZXNzUHJlbG9hZChsaW5rKTtcbiAgICB9XG4gICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgIT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgbXV0YXRpb24uYWRkZWROb2Rlcykge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLnRhZ05hbWUgPT09ICdMSU5LJyAmJiBub2RlLnJlbCA9PT0gJ21vZHVsZXByZWxvYWQnKVxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzUHJlbG9hZChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pLm9ic2VydmUoZG9jdW1lbnQsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgIGZ1bmN0aW9uIGdldEZldGNoT3B0cyhzY3JpcHQpIHtcbiAgICAgICAgY29uc3QgZmV0Y2hPcHRzID0ge307XG4gICAgICAgIGlmIChzY3JpcHQuaW50ZWdyaXR5KVxuICAgICAgICAgICAgZmV0Y2hPcHRzLmludGVncml0eSA9IHNjcmlwdC5pbnRlZ3JpdHk7XG4gICAgICAgIGlmIChzY3JpcHQucmVmZXJyZXJwb2xpY3kpXG4gICAgICAgICAgICBmZXRjaE9wdHMucmVmZXJyZXJQb2xpY3kgPSBzY3JpcHQucmVmZXJyZXJwb2xpY3k7XG4gICAgICAgIGlmIChzY3JpcHQuY3Jvc3NvcmlnaW4gPT09ICd1c2UtY3JlZGVudGlhbHMnKVxuICAgICAgICAgICAgZmV0Y2hPcHRzLmNyZWRlbnRpYWxzID0gJ2luY2x1ZGUnO1xuICAgICAgICBlbHNlIGlmIChzY3JpcHQuY3Jvc3NvcmlnaW4gPT09ICdhbm9ueW1vdXMnKVxuICAgICAgICAgICAgZmV0Y2hPcHRzLmNyZWRlbnRpYWxzID0gJ29taXQnO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBmZXRjaE9wdHMuY3JlZGVudGlhbHMgPSAnc2FtZS1vcmlnaW4nO1xuICAgICAgICByZXR1cm4gZmV0Y2hPcHRzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwcm9jZXNzUHJlbG9hZChsaW5rKSB7XG4gICAgICAgIGlmIChsaW5rLmVwKVxuICAgICAgICAgICAgLy8gZXAgbWFya2VyID0gcHJvY2Vzc2VkXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxpbmsuZXAgPSB0cnVlO1xuICAgICAgICAvLyBwcmVwb3B1bGF0ZSB0aGUgbG9hZCByZWNvcmRcbiAgICAgICAgY29uc3QgZmV0Y2hPcHRzID0gZ2V0RmV0Y2hPcHRzKGxpbmspO1xuICAgICAgICBmZXRjaChsaW5rLmhyZWYsIGZldGNoT3B0cyk7XG4gICAgfVxufSgpKTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zY3NzJ1xuXG5sZXQgZCA9IG5ldyBEYXRlKCkuZ2V0U2Vjb25kcygpO1xuXG5jb25zb2xlLmxvZyhcIm5lc3RvMTIyMjM0NVwiKTtcbiAgY29uc29sZS5sb2coZCk7XG5cbmlmIChcImd1cmFiaWphXCIgPT09IGQpIHtcbiAgXG4gICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xufSJdLCJuYW1lcyI6WyJyZWxMaXN0IiwibGluayIsInByb2Nlc3NQcmVsb2FkIiwibXV0YXRpb25zIiwibXV0YXRpb24iLCJub2RlIiwiZ2V0RmV0Y2hPcHRzIiwic2NyaXB0IiwiZmV0Y2hPcHRzIiwiZCJdLCJtYXBwaW5ncyI6IkNBQXFCLFVBQW9CLENBQ3JDLE1BQU1BLEVBQVUsU0FBUyxjQUFjLE1BQU0sRUFBRSxRQUMvQyxHQUFJQSxHQUFXQSxFQUFRLFVBQVlBLEVBQVEsU0FBUyxlQUFlLEVBQy9ELE9BRUosVUFBV0MsS0FBUSxTQUFTLGlCQUFpQiwyQkFBMkIsRUFDcEVDLEVBQWVELENBQUksRUFFdkIsSUFBSSxpQkFBa0JFLEdBQWMsQ0FDaEMsVUFBV0MsS0FBWUQsRUFDbkIsR0FBSUMsRUFBUyxPQUFTLFlBR3RCLFVBQVdDLEtBQVFELEVBQVMsV0FDcEJDLEVBQUssVUFBWSxRQUFVQSxFQUFLLE1BQVEsaUJBQ3hDSCxFQUFlRyxDQUFJLENBR3ZDLENBQUssRUFBRSxRQUFRLFNBQVUsQ0FBRSxVQUFXLEdBQU0sUUFBUyxFQUFJLENBQUUsRUFDdkQsU0FBU0MsRUFBYUMsRUFBUSxDQUMxQixNQUFNQyxFQUFZLENBQUEsRUFDbEIsT0FBSUQsRUFBTyxZQUNQQyxFQUFVLFVBQVlELEVBQU8sV0FDN0JBLEVBQU8saUJBQ1BDLEVBQVUsZUFBaUJELEVBQU8sZ0JBQ2xDQSxFQUFPLGNBQWdCLGtCQUN2QkMsRUFBVSxZQUFjLFVBQ25CRCxFQUFPLGNBQWdCLFlBQzVCQyxFQUFVLFlBQWMsT0FFeEJBLEVBQVUsWUFBYyxjQUNyQkEsQ0FDVixDQUNELFNBQVNOLEVBQWVELEVBQU0sQ0FDMUIsR0FBSUEsRUFBSyxHQUVMLE9BQ0pBLEVBQUssR0FBSyxHQUVWLE1BQU1PLEVBQVlGLEVBQWFMLENBQUksRUFDbkMsTUFBTUEsRUFBSyxLQUFNTyxDQUFTLENBQzdCLENBQ0wsS0N4Q0EsSUFBSUMsRUFBSSxJQUFJLE9BQU8sYUFFbkIsUUFBUSxJQUFJLGNBQWMsRUFDeEIsUUFBUSxJQUFJQSxDQUFDLEVBRUlBLElBQWYsWUFFQSxRQUFRLElBQUksTUFBTSJ9
