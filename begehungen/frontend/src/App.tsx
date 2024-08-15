import type { PageItem } from "./@types/MenuItems.tsx"
import ObservationsPage from "./pages/observations/ObservationsPage.tsx"
import { BarChart, FileDownload, Preview } from "@mui/icons-material"
import NewObservationPage from "./pages/observations/NewObservationPage.tsx"
import AnalyzePage from "./pages/AnalyzePage.tsx"
import ExportPage from "./pages/ExportPage.tsx"
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout.tsx"
import { ObservationName } from "./@types/Observations.ts"

function App() {
  const pages: PageItem[] = [
    {
      page: <ObservationsPage />,
      icon: <Preview />,
      link: "Erfassen",
      showInNavigation: true,
      breadcrumbs: ["Erfassen"],
    },
    {
      page: <NewObservationPage which={ObservationName.OPS_INFRA} />,
      icon: <Preview />,
      link: "Erfassen/Neu/OpsInfra",
      showInNavigation: false,
      breadcrumbs: ["Erfassen", "Ops Infrastruktur"],
      withSearch: true,
    },
    {
      page: <NewObservationPage which={ObservationName.OPS_INTERVENTIONELL} />,
      icon: <Preview />,
      link: "Erfassen/Neu/OpsInterventionell",
      showInNavigation: false,
      breadcrumbs: ["Erfassen", "Ops Interventionell"],
      withSearch: true,
    },
    {
      page: <NewObservationPage which={ObservationName.AMBULANT} />,
      icon: <Preview />,
      link: "Erfassen/Neu/Ambulant",
      showInNavigation: false,
      breadcrumbs: ["Erfassen", "Ambulant"],
      withSearch: true,
    },
    {
      page: <NewObservationPage which={ObservationName.INTERVENTIONELL} />,
      icon: <Preview />,
      link: "Erfassen/Neu/Interventionell",
      showInNavigation: false,
      breadcrumbs: ["Erfassen", "Interventionell"],
      withSearch: true,
    },
    {
      page: <AnalyzePage />,
      icon: <BarChart />,
      link: "Auswerten",
      showInNavigation: true,
      breadcrumbs: ["Auswerten"],
    },
    {
      page: <ExportPage />,
      icon: <FileDownload />,
      link: "Exportieren",
      showInNavigation: true,
      breadcrumbs: ["Exportieren"],
    },
  ]

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navigate to={"/erfassen"} />} />
        {pages.map((page) => (
          <Route
            key={page.link}
            element={<MainLayout pages={pages} breadcrumbs={page.breadcrumbs} withSearch={page.withSearch} />}
          >
            <Route key={page.link} path={"/" + page.link.toLowerCase()} element={page.page}>
              {page.children?.map((child) => (
                <Route key={child.link} path={child.link.toLowerCase()} element={child.page} />
              ))}
            </Route>
          </Route>
        ))}
      </>,
    ),
  )

  return <RouterProvider router={router} />
}

export default App
